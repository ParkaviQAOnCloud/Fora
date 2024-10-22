class Whatsnew {
   get Whatsnewicon() {
       return cy.get('[class="flex items-center justify-center text-secondary mr-2 flex-shrink-0 text-[24px] group-hover:text-main"]', { timeout: 5000 });
   }

   get Whatsnew() {
       return cy.contains("What's New", { timeout: 5000 });
   }

   get Whatsnewheader() {
       return cy.contains("What's New", { timeout: 5000 });
   }

   get Whatsnewsection() {
       return cy.get('[class="border-t md:border-t-0 md:border-l border-secondaryDark pt-4 md:pt-0 md:pl-8 flex flex-col gap-8"]', { timeout: 5000 });
   }

   get Whatsnewleftsection() {
       return cy.get('[class="w-20 flex-shrink-0 md:mr-4 text-left md:text-right text-secondaryDark text-medium flex flex-row md:flex-col gap-1 md:gap-0"]', { timeout: 5000 });
   }

   get Whatsnewsubheader() {
       return cy.get('[class="mb-4 text-header tracking-tight lg:tracking-normal lg:text-2xl font-extrabold text-main"]', { timeout: 5000 });
   }

   get Whatsnewdate() {
       return cy.get('[class="text-small text-secondaryDark"]', { timeout: 5000 });
   }

   get Whatsnewtag() {
       return cy.get('[class="inline-block text-small px-2 py-1 rounded-full flex items-center justify-center"]', { timeout: 5000 });
   }
}

export default new Whatsnew();
