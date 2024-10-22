class Marketing {
   get Resource() {
       return cy.xpath("//a[normalize-space()='Resources']", { timeout: 5000 });
   }
   get Marketing() {
       return cy.xpath("//a[normalize-space()='Marketing']", { timeout: 5000 });
   }
   get ForawebcontentHeader() {
       return cy.contains("Fora Web Content", { timeout: 5000 });
   }
   get Subheading() {
       return cy.get('[class="border-main text-main inline-flex items-center border-b-2 px-4 pb-4 text-sm font-medium whitespace-nowrap cursor-pointer"]', { timeout: 5000 });
   }
   get Templates() {
       return cy.contains("Templates", { timeout: 5000 });
   }
   get BrandAssets() {
       return cy.contains("Brand Assets", { timeout: 5000 });
   }
   get Brandresources() {
       return cy.xpath("//p[normalize-space()='Brand resources']", { timeout: 5000 });
   }
   get Brandresourcesicon() {
       return cy.xpath("//div[3]//div[2]//div[1]//dt[1]//div[1]", { timeout: 5000 });
   }
   get Brandresourcestext() {
       return cy.contains("Branding is an essential component of building a successful business. A strong brand creates recognition, trust, and loyalty among customers. We’ve created resources with an overview of different Fora-related branding components ranging from the colors we use to logo treatment and more.", { timeout: 5000 });
   }
   get opengoogledrive() {
       return cy.get('.btn-primary-outline > .text-medium', { timeout: 5000 });
   }
   get Switchtobrandresource() {
       return cy.get('#tab-brand-assets > .border-transparent', { timeout: 5000 });
   }
   get Switchtotemplates() {
       return cy.get('#tab-templates > .border-transparent', { timeout: 5000 });
   }
   get Forabrandguideline() {
       return cy.contains("View Fora's brand guidelines", { timeout: 5000 });
   }
   get Brandguideline() {
       return cy.xpath("//p[normalize-space()='Fora Brand Guidelines']", { timeout: 5000 });
   }
   get Brandguidelineicon() {
       return cy.get('[class="flex h-12 min-w-[48px] lg:h-10 lg:min-w-[40px] items-center justify-center rounded-[2px] bg-mainHoliday text-main"]', { timeout: 5000 });
   }
   get Brandguidelinetext() {
       return cy.contains("Find all necessary information on the Fora brand including colors, fonts, logos and guidelines. Feel free to reference these guides as you need. As a reminder, you are welcome and encouraged to create your own brand guidelines that work for your business.", { timeout: 5000 });
   }
   get Createprofile()
   {
    return cy.xpath("//button[normalize-space()='Create or edit profile']")
   }
   get Notpublished()
   {
    return cy.xpath("//p[normalize-space()='Not Published']")
   }
   get Status()
   {
    return cy.xpath("//p[normalize-space()='Status:']")
   }
   get Welcometoforatravel()
   {
    return cy.xpath("//p[normalize-space()='Welcome to your foratravel.com profile']")
   }
   get Welcometoforatravelsubheader()
   {
    return cy.xpath("//p[contains(text(),'We built Fora to make you look good – you')]")
   }
   get Fourtipsonhowtomakeprofile()
   {
    return cy.xpath("//a[normalize-space()='4 Tips on How to Make Your Fora Profile Stand Out']")
   }
   get Howtopublishsite()
   {
    return cy.xpath("//p[normalize-space()='How to publish your site:']")
   }
   get Createoreditcontent()
   {
    return cy.xpath("//p[normalize-space()='Create or edit content']")
   }
   get InprogressProgressbar()
   {
    return cy.get('[class="w-full h-2 rounded-lg bg-progress"]')
   }
   get Progressbar()
   {
    return cy.get('[class="w-full h-2 rounded-lg bg-lightGreyBorder"]')
   }
   get Submitforreview()
   {
    return cy.xpath("//p[normalize-space()='Submit for review']")
   }
   get Published()
   {
    return cy.xpath("//p[normalize-space()='Published']")
   }
   get Missingrequiredcontent()
   {
    return cy.xpath("//div[normalize-space()='Missing required content']")
   }
   get Edityourprofilecontent()
   {
    return cy.xpath("//h2[normalize-space()='Edit your profile content']")
   }
   get Aboutyou()
   {
    return cy.xpath("//span[normalize-space()='About You']")
   }
   get Fullname()
   {
    return cy.xpath("//span[normalize-space()='Full Name']")
   }
   get Edittoadd()
   {
    return cy.xpath("(//button[@type='button'][normalize-space()='Edit to add'])[1]")
   }
   get Edittoadd()
   {
    return cy.xpath("(//button[@type='button'][normalize-space()='Edit to add'])[1]")
   }
   get Errormessage()
   {
    return cy.contains("This field is required.")
   }
   get Cancelbutton()
   {
    return cy.xpath("//button[normalize-space()='Cancel']")
   }
   get Editicon()
   {
    return cy.get('[data-testid="edit-button"]')
   }
   get Firstname()
   {
    return cy.xpath("//label[normalize-space()='First Name']")
   }
   get Firstnamefield()
   {
    return cy.xpath("(//input)[1]")
   }
   get Lastname()
   {
    return cy.xpath("//label[normalize-space()='Last Name']")
   }
   get Lastnamefield()
   {
    return cy.xpath("(//input)[2]")
   }
   get Fullnametext()
   {
    return cy.xpath("//p[contains(text(),'*Most Fora Advisors display their first and last n')]")
   }
   get Supportemail()
   {
    return cy.xpath("//a[normalize-space()='support@fora.travel']")
   }
   get Savebutton()
   {
    return cy.xpath("//button[normalize-space()='Save']")
   }
   get Pronouns()
   {
    return cy.xpath("//label[normalize-space()='Pronouns']")
   }
   get Chooseanoption()
   {
    return cy.xpath("//button[normalize-space()='Choose an option...']")
   }
   get Sheher()
   {
    return cy.get('[data-testid="option-She/Her"]')

   }
   get hehim()
   {
    return cy.get('[data-testid="option-He/Him"]')

   }
   get Theythem()
   {
    return cy.get('[data-testid="option-They/Them"]')

   }
   get other()
   {
    return cy.get('[data-testid="option-Other"]')

   }
   get shethey()
   {
    return cy.get('[data-testid="option-She/they"]')

   }
   get Hethey()
   {
    return cy.get('[data-testid="option-He/they"]')

   }
   get Theyshe()
   {
    return cy.get('[data-testid="option-They/she"]')

   }
   get Theyhe()
   {
    return cy.get('[data-testid="option-They/he"]')
   }
   get Prefernottospecify()
   {
    return cy.get('[data-testid="option-Prefer not to specify"]')
   }
   get Pronountext()
   {
    return cy.contains("These are optional, but include an answer if you'd like them included on your profile.")
   }
   get Pronounexample()
   {
    return cy.xpath("//img[@alt='Example of Pronouns on Fora Profile']")
   }
   get Pastallurl()
   {
    return cy.xpath("//p[contains(text(),'Paste full URLs, not tags (ex. https://www.instagr')]")
   }
   get Instagram()
   {
    return cy.xpath("//label[normalize-space()='Instagram']")
   }
   get Instagramurl()
   {
    return cy.xpath("//input[@placeholder='Enter Instagram URL']")
   }
   get FB()
   {
    return cy.xpath("//label[normalize-space()='Facebook']")
   }
   get FBurl()
   {
    return cy.xpath("//input[@placeholder='Enter Facebook URL']")
   }
   get Linkedin()
   {
    return cy.xpath("//label[normalize-space()='LinkedIn']")
   }
   get Linkedinurl()
   {
    return cy.xpath("//input[@placeholder='Enter LinkedIn URL']")
   }
   get Pintrest()
   {
    return cy.xpath("//label[normalize-space()='Pinterest']")
   }
   get Pintresturl()
   {
    return cy.xpath("//input[@placeholder='Enter Pinterest URL']")
   }
   get Twitter()
   {
    return cy.xpath("//label[normalize-space()='X (Twitter)']")
   }
   get Twitterurl()
   {
    return cy.xpath("//input[@placeholder='Enter X (Twitter) URL']")
   }
   get Youtube()
   {
    return cy.xpath("//label[normalize-space()='Youtube']")
   }
   get Youtubeurl()
   {
    return cy.xpath("//input[@placeholder='Enter Youtube URL']")
   }

   get Tiktok()
   {
    return cy.xpath("//label[normalize-space()='TikTok']")
   }
   get Tiktokurl()
   {
    return cy.xpath("//input[@placeholder='Enter TikTok URL']")
   }
   get Website()
   {
    return cy.xpath("//label[normalize-space()='Website']")
   }
   get Websiteurl()
   {
    return cy.xpath("//input[@placeholder='Enter Website URL']")
   }

   get Linkimage()
   {
    return cy.xpath("//img[@alt='Example of Social Media Links on Fora Profile']")
   }
   get HTTerror()
   {
    return cy.xpath("//div[normalize-space()='Please enter a URL that starts with https://www.']")
   }
   get Sociallink()
   {
    return cy.xpath("//span[normalize-space()='Social Links']")
   }  
   get Languagespoken()
   {
    return cy.xpath("//span[normalize-space()='Languages Spoken']")
   }

   get Whatlangyouspeak()
   {
    return cy.xpath("//label[normalize-space()='What languages do you speak?']")
   }
   get Whatlangyouspeaktextbox()
   {
    return cy.xpath("//input[@placeholder='Enter languages spoken']")
   }
   get Commaseparated()
   {
    return cy.xpath("//p[normalize-space()='Please write a comma-separated list.']")
   }
   get image()
   {
    return cy.xpath("//img[@alt='Example of Based In on Fora Profile']")
   }

   get Profileex()
   {
    return cy.xpath("//label[normalize-space()='Profile Example:']")
   }
   get Basedin()
   {
    return cy.xpath("//span[normalize-space()='Based In']")
   }
   get Whereareyoubased()
   {
    return cy.xpath("//label[normalize-space()='Where are you based?']")
   }
   get Enterlocation()
   {
    return cy.xpath("//input[@placeholder='Enter location']")
   }
   get Orshouldwestayhome()
   {
    return cy.xpath("//p[contains(text(),'(Or should we say – home when you aren')]")
   }
   get ()
   {
    return cy.xpath("//img[@alt='Example of Based In on Fora Profile']")
   }
   get Minibio()
   {
    return cy.xpath("//span[normalize-space()='Mini Bio']")
   }
   get Describeyourself()
   {
    return cy.xpath("//label[normalize-space()='Describe yourself in 1-2 lines']")
   }
   get Describeyourselftextbox()
   {
    return cy.xpath("//input[@placeholder='Enter blurb']")
   }
   get Minibiosubheader()
   {
    return cy.xpath("//p[contains(text(),'Think of it as your 160 character count for your s')]")
   }
   get minibioimage()
   {
    return cy.xpath("//img[@alt='Example of Mini Bio on Fora Profile']")
   }
   get Contactform()
   {
    return cy.xpath("//span[normalize-space()='Contact Form']")
   }
   get Contactformtext()
   {
    return cy.xpath("//p[contains(text(),'If you would like to remove the contact form from ')]")
   }
   get Removefromprofile()
   {
    return cy.xpath("//label[normalize-space()='Remove the contact form from my profile']")
   }
   get Removefromprofilecheckbox()
   {
    return cy.xpath("//input[@type='checkbox']")
   }
   get Enabled()
   {
    return cy.contains("Enabled")
   }
   get Disabled()
   {
    return cy.xpath("//div[normalize-space()='Disabled']")
   }
   get Bussinessinformationsection()
   {
    return cy.xpath("//span[normalize-space()='Business Information']")
   }
   get Bussinessinformationsectionicon()
   {
    return cy.xpath("//body/div/div/div/div/div/div/div/div[2]/div[2]/div[1]//*[name()='svg']")
   }
   get Nightlybookingminimum()
   {
    return cy.xpath("//span[normalize-space()='Nightly Booking Minimum']")
   }
   get Nightlybookingminimumtext()
   {
    return cy.xpath("//label[normalize-space()='Do you have a minimum nightly booking budget?']")
   }
   get Nightlybookingminimumtextfield()
   {
    return cy.xpath("//input[@placeholder='Enter amount in USD']")
   }
   get Nightlybookingminimumimage()
   {
    return cy.xpath("//img[@alt='Example of Nightly Rate on Fora Profile']")
   }
   get Destinationexpertise()
   {
    return cy.xpath("//span[normalize-space()='Destination Expertise']")
   }
   get Destinationexpertisetext()
   {
    return cy.xpath("//label[contains(text(),'In what destinations do you have the most travel e')]")
   }
   get Destinationexpertisetext1()
   {
    return cy.xpath("//p[contains(text(),'We recommend choosing two destinations that you sp')]")
   }
   get Destinationexpertisetextfield()
   {
    return cy.xpath("//input[@placeholder='Enter destinations']")
   }
   get Travelstyletextfield()
   {
    return cy.xpath("//input[@placeholder='Enter your story']")
   }
   get Destinationexpertiseimagetext()
   {
    return cy.xpath("//img[@alt='Example of Nightly Rate on Fora Profile']")
   }
   get Destinationexpertiseimage()
   {
    return cy.xpath("//img[@alt='Example of Nightly Rate on Fora Profile']")
   }
   get Traveltype()
   {
    return cy.xpath("//span[normalize-space()='Travel Type Expertise']")
   }
   get Thesecategory()
   {
    return cy.xpath("//p[contains(text(),'These categories will be displayed on your Fora pr')]")
   }
   get Roadtrip()
   {
    return cy.xpath("//label[normalize-space()='Road Trip']")
   }
   get Safari()
   {
    return cy.xpath("//label[normalize-space()='Safari']")
   }
   get Travlestyle()
   {
    return cy.xpath("//span[normalize-space()='Travel Style']")
   }
   get Travlestyletext()
   {
    return cy.xpath("//label[contains(text(),'Tell us and travelers about what makes your globet')]")
   }
   get Travelexample()
   {
    return cy.xpath("//label[normalize-space()='Examples:']")
   }
   get Travlestyleimage()
   {
    return cy.xpath("//img[@alt='Example of Travel Style on Fora Profile']")
   }
   get Favoritehotels()
   {
    return cy.xpath("//label[normalize-space()='What are your favorite hotels?']")
   }
   get Enterhotel()
   {
    return cy.xpath("//input[@placeholder='Enter hotels']")
   }
   get Pleasewrite()
   {
    return cy.xpath("//p[normalize-space()='Please write a comma-separated list.']")
   }
   get Foraprofileimage()
   {
    return cy.xpath("//img[@alt='Example of Based In on Fora Profile']")
   }
   get Imagesheader()
   {
    return cy.xpath("//span[normalize-space()='Images']")
   }
   get Imagesicon()
   {
    return cy.xpath("(//*[name()='svg'])[59]")
   }
   get Addprofilesectionicon()
   {
    return cy.xpath("(//*[name()='svg'])[33]")
   }
   get Profilepicture()
   {
    return cy.xpath("//span[normalize-space()='Profile Picture']")
   }
   get Profileeditbutton()
   {
    return cy.xpath('//body/div/div/div/div/div/div/div/div/div/div[2]/div[4]/button[1]')
   }
   get Profilepicturetext()
   {
    return cy.xpath("//p[contains(text(),'Please ensure that your image has a size of at lea')]")
   }
   get Profilepicturetext1()
   {
    return cy.xpath("//p[contains(text(),'Your face should be displayed prominently, in a we')]")
   }
   get Profilepicturetext2()
   {
    return cy.contains("Do not have a background that is all white or all one color; we look for more lifestyle-based photos rather than traditional headshots.")
   }
   get Profilepicturetext3()
   {
    return cy.xpath("//p[contains(text(),'You can do so with a cool, quirky pose or a fun/in')]")
   }
   get Profilepicturetext4()
   {
    return cy.contains("The portrait mode is a great way to get good shots in an easy way.")
   }
   get Profilepictureonfora()
   {
    return cy.xpath("//img[@alt='Example of Profile Picture on Fora Profile']")
   }
   get Orginaltravelimages()
   {
    return cy.xpath("//span[normalize-space()='Original Travel Images']")
   }
   get Orginaltraveledit()
   {
    return cy.xpath("//body/div/div/div/div/div/div/div/div/div/div[2]/div[4]/button[1]")
   }
   get Orginaltraveltext()
   {
    return cy.contains("This is optional but if you'd like to include some of your original travel photos on your page, please upload up to 5 photos here. Please only submit photos that you have taken and have ownership of.")
   }
   get Orginaltraveltext1()
   {
    return cy.xpath("//p[contains(text(),'These images should be vertically oriented (around')]")
   }
   get Orginaltraveltext2()
   {
    return cy.xpath("//p[contains(text(),'Please note by sharing images, you grant Fora perm')]")
   }
   get Orginaltravelimag()
   {
    return cy.xpath("//img[@alt='Example of Image Carousel on Fora Profile']")
   }
   get Submitforreviewbutton()
   {
    return cy.xpath("//button[normalize-space()='Submit for review']")
   }
   get Submitforreviewsuccesstext()
   {
    return cy.get('[class="py-2 flex gap-1"]')
   }
 
   


}

export default new Marketing;
