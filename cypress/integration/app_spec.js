import photos from '../fixtures/photos.json';

describe('Mars rover photos landing page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/*', { fixture: 'photos.json' }).as('getPhotos');
    });

    it('should render navbar', () => {
        cy.visit('/');
        cy.get('[data-testid=mars-rover-photos-navbar]').should('exist');
    });

    it('should render spinner when data is loading', () => {
        cy.visit('/');
        cy.get('[data-testid=mars-rover-photos-gallery-loading]').should('exist');
    });

    it('should render the list of photos', () => {
        cy.visit('/');
        cy.wait('@getPhotos').then((interception) => {
            assert.isNotNull(interception.response.body, 'Photos API call has data');
        });
        cy.get('[data-testid=mars-rover-photos-gallery]').should('exist');
        photos.photos.forEach((photo) => {
            cy.get(`[data-testid=mars-rover-photo-${photo.id}]`).should('exist');
        });
    });
});
