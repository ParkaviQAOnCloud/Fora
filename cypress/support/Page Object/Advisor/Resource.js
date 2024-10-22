class Resource {
    get Resource() {
        return cy.xpath("//span[normalize-space()='Templates & Forms']", { timeout: 5000 });
    }

    get resource() {
        return cy.contains("Resources", { timeout: 5000 });
    }

    get resourcetext() {
        return cy.contains("We’re here to support you every step of the way — from your first booking to your 1,000th. We’ve created customizable resources to make becoming a successful advisor an energizing (and fun!) process. No need to get bogged down in the logistics. From best practices for collecting credit card info to understanding key industry terms, we’ve got your back.", { timeout: 5000 });
    }

    get Brandresource() {
        return cy.contains("Brand Resources", { timeout: 5000 });
    }
    
    get Brandresourcetext() {
        return cy.contains("Branding is an essential component of building a successful business. A strong brand creates recognition, trust, and loyalty among customers. We’ve created resources with an overview of different Fora-related branding components ranging from the colors we use to logo treatment and more.", { timeout: 5000 });
    }
    
    get openingoogledrive() {
        return cy.contains("Open in Google Drive", { timeout: 5000 });
    }
    
    get Emailtemplate() {
        return cy.contains("Email templates", { timeout: 5000 });
    }
    
    get Emailtemplatetext() {
        return cy.contains("Commonly used email templates to help you effectively communicate with clients & suppliers.", { timeout: 5000 });
    }
    
    get Iternarytemplate() {
        return cy.contains("Itinerary template", { timeout: 5000 });
    }
    
    get Iternarytemplatetext() {
        return cy.contains("Use our itinerary template so you can customize your client’s trip — in style.", { timeout: 5000 });
    }
    
    get Emailanditineray() {
        return cy.contains("Email and itinerary templates", { timeout: 5000 });
    }
    
    get Emailanditineraytext() {
        return cy.contains("Email marketing is one of the most powerful ways to reach & engage with your clients. Access MailChimp templates with travel content written by our in-house team. You’ll also find itinerary templates so you can customize your client’s trip — in style.", { timeout: 5000 });
    }

    get Forms() {
        return cy.xpath("//p[normalize-space()='Forms']", { timeout: 5000 });
    }
    
    get Formstext() {
        return cy.contains("Stay organized with our pre-made forms. From client intake forms to tax documents, we’ve got everything you need. Remember: never send credit card information via email.", { timeout: 5000 });
    }

    get Otherresource() {
        return cy.contains("Other resources", { timeout: 5000 });
    }
    
    get Otherresourcetext() {
        return cy.contains("Our database of useful resources will help your travel business run smoothly — so you can focus on the fun stuff. Here, you can access numerous tools, like our Net Rate Calculator for invoicing clients, helpful info like Fora HQ’s company address and more information about our team.", { timeout: 5000 });
    }
}

export default new Resource;
