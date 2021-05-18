# Next.js Proof-of-Concept

A live version of the app is available [here](https://pedantic-curran-5ebba4.netlify.app/) via Netlify.

The project can be run with a Strapi API I have set up, by including a `.env.local` file in the root directory, with the following variable: `NEXT_PUBLIC_BASE_URL=https://strapi-project-exam-2.herokuapp.com/`.

## Login details

Username: myuser

Password: 68Inv8&ChqSH

## 1. Summary

I started working on the project by researching websites with a similar functionality to the one I wanted to make. Once I had a good understanding of common deign patterns for hotel websites, and the overall aesthetic I wanted to go for I began designing it in Figma.

Each page was coded to closely resemble the Figma design. Code that needs to be re-used is added to their own component. To explore the capabilities of Next.js, different ways of rendering content has been used. The same goes for the way components are structured, to try different configurations of how this can be done as well.

To style the app **SASS** has been used with SCSS modules, and component level styles to ensure good performance.

A **Strapi** instance was set up as the backend API, with **S3** and **MongoDB**.

All functionality has been tested to ensure that everything works as expected.

## 2. Body

### 2.1. Introduction

I have built an application using Next.js that follows the requirements initially outlined in an assignment.

All required functionality has been included. However, I have made certain technical choices as a way to explore the technologies I’m using. In a production application it would make more sense to render some parts of the app differently, changing the error checking logic and further refactoring to make the structure and data flow clearer.

The design is built from a user experience centric perspective. Although the visual appeal could be improved, the way a user would interact with the app has been carefully thought out. So as to create a good user flow that makes sense.

Because the `/hotels` and `/hotel/[slug]` pages are statically generated, they won't update until the website is re-built.

### 2.2. Main section of report

I started the project by researching design patterns of websites that serve a similar kind of purpose. Because I was going to make an app with basic functionality, I needed to create a user interface that was somewhat minimalistic, but still with a modern and intuitive experience.

My go-to source for inspiration is Dribbble. After spending some time researching design patterns, and becoming familiar with common ways of solving this challenge, I started creating a mockup in Figma.

The overall aesthetic of the application was chosen to create a Nordic feel, which is congruent with a brand that is supposed to promote hotels in the city of Bergen, with a hint of contrast.

For the choice of base font I decided on **Inter**, because it’s a modern font that works well on screens. The only exception to this is the use of **Playfair Display** as the home page heading, as a way to make it stand out more.

Except for the logo and hotels, I only have one other image, which is on the right side of the home page. I didn’t think it was necessary to add any decorations to this image, as it would take away time that needed to be spent on coding.

There are no other icons except for the star used in the rating element. The only other places where it would make sense to add some icons is with the dashboard navbar links. However, that could make them look a bit cluttered, and I wanted to spend more time on other important aspects instead.

I tried a few different layouts, but I eventually settled on a minimal design that I thought would fit the project well. While I was designing the site in Figma, I made sure to update my style guide.

When I first planned the project, I thought that I would hard code all data, and then swap it out by fetching a Strapi backend. In this case it made sense to do a bit of both. Some of the pages were coded with hard coded data, and then swapped out with dynamic data, while other times I felt it was more intuitive to build the application while fetching data dynamically.

Regarding how the application is actually structured. The home page follows a basic grid structure, with an absolute positioned navbar in the first cell. In the first grid cell there is a search field that allows you to find hotels as you are typing in it. This is done by fetching all hotels on page load, and then filter hotels by name based on what is entered in the input field. This search functionality is case insensitive, so it doesn’t matter if any characters are capitalized or not. I have not chosen to include this input field in the `<Input />` component because it’s only used once, but in a bigger production application it would make more sense to do so.

On the `/hotels` page data for all hotels is fetched via `getStaticProps` during build time. The only reason why I chose that sort of fetching method in this case, was because I wanted to see how well this page would perform if it was statically generated. In a production application I would not necessarily do it the same way, because when more hotels are added, the application needs to be re-built in order for the page to update.

A `<HotelCard />` component receives props here to render each hotel element.

`/hotels/[slug]` is also set up to statically generate each page, by getting a list of paths with `getStaticPaths` and then fetching data with `getStaticProps`. When the ‘Book Now’ button is clicked a modal opens that allows the end-user to send an enquiry about the hotel. The hotel id is included in this request, which will be used to display the hotel name for each enquiry in the dashboard. `<Rating />` and `<Price />` is divided into their own components for re-use.

In addition to a navbar, the `/contact` page only consists of a `<Form />` component. Even though requests are specified in the form component, I think it would look better to have them in each page component instead, and then share state between them with `useState`.

With `/messages` and `/enquiries` there is a similar kind of logic, that each include a `<Card />` component, which is used for all modals as well. On the `/enquiries` page however, hotels data is also fetched, to match it with the hotel id that is included whenever someone makes a hotel enquiry.

`/add-establishment` functions in a very similar way as the contact page, but with authorization functionality. Meaning users with read-only permission can be added.

`/login` on the other hand does not use a form component. The reason for this is because I wanted to see what it would look like when it’s not refactored into such a component. This functionality works by sending a login request to Strapi, and then saving the received **JWT token** to local storage.

Form validation is done through processing Strapi responses, purely to see how this would work. Using a library for this functionality would improve the user experience by making validation faster. Strapi isn’t ideal to rely on for validation anyway, because their validation is not always consistent. For that reason, I’ve had to use HTML validation in some cases, such as with image uploading when adding hotels. A way to get around that though, would be to make requests through a Next.js API, and validate each of those requests before they are sent to Strapi.

The default navbar `<MainNavbar />` checks if a JWT token exists, and then toggles a **‘Login’** or **‘Dashboard’** link. With the dashboard I have chosen to do it in a slightly different way, in order to look at how I would do it using a layout component with `<DashboardLayout />`. This component enforces protected routes, by re-directing users to the login page if they are not authorized.

All components are styled with **SASS** through SCSS modules, and reusability whenever possible with variables. Component level styles should improve performance somewhat as well, and make selector naming more concise.

Considering that I’m using CSS modules in the form of SASS, I don’t have to use BEM based on what was outlined in the assignment. I have still chosen to use a modified version of it where ‘--‘ is replaced with ‘\_\_’, because dashes are not allowed in JavaScript variables.

Once the app was ready, it was thoroughly tested to see if anything didn’t work as expected.

After testing the application, I deployed it on Netlify. The Strapi backend is running on a Heroku Dyno, which is configured with S3 for file storage and MongoDB as the database.

### 2.3. Conclusion

While developing the application I did gain a better understanding about the inner workings of Next.js. Although it has its quirks like any other framework, Next.js is a more straightforward way to develop with React, and make sites that perform well, especially when using it as a static site generator.

There are some clear limitations with using Strapi as an off the shelf API. The issue that I have run into is being able to validate required fields when making POST requests, which does not always work, even though I have clearly specified it and tested everything in the GUI before making requests. As stated before, a way to solve this would be to set up API endpoints through Next.js that validate requests, and then pass those requests on to Strapi.

Some of the components could be structured in a different way, but that is also a question of project requirements.
Because I’m using component level state with the `useState` hook, access to and setting of state is not that streamlined across the application. It would make sense to use global state management with the **Context API** or **Redux** to improve this.

Front-end error checking could make for a better user experience, by displaying errors faster, but validation does perform reasonably well once the application has been deployed.

I could have added a hamburger menu, but I think the navigation works well enough for a proof of concept, even though I would have included something like that in a production app.
