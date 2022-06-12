<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h1 align="center">JS Frameworks CA</h1>

  <p align="center">
    A next.js app with API connections, forms and authentication.
    <br />
    <br />
    <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-oysteinwangen/issues">Report Bug</a>
    ·
    <a href="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-oysteinwangen/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#description">Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running">Running</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#api">API</a></li>
        <li><a href="#layout-ui-and-functions">Layout, UI and functions</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- DESCRIPTION -->
## Description

<img src="./JSFrameworksCAScreenshot.png" alt="Screenshot of the homepage" width="800">

JS Frameworks CA is a specific feature project utilising several different technologies based around the React framework. It's based on API requests, a simple UI, and basic form and authentication functions that can be ported to all kinds of projects.

**Features:**
* A Home page with a products grid populated by a REST API-connection
* Details page for single products, utilising dynamic routes
* A contact page with form validation
* A login page with API authentication

### Built With
* [Next.js](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Formik](https://formik.org/)
* [Yup](https://www.npmjs.com/package/yup)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Installation

1. Clone the repo:
   ```sh
   git clone git@github.com:Noroff-FEU-Assignments/js-frameworks-course-assignment-oysteinwangen.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
### Running

Run the following command to start developing:
```sh
npm run dev
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE -->
## Usage

### API
The API constants is located in `./constants/api.js` if you want to switch to a custom API for development.
```js
export const BASE_URL = "https://strapi-sp2-ow.herokuapp.com/";
export const TOKEN_PATH = "auth/local";
```

### Layout, UI and functions
All styling and UI layout comes from utilising the integrated Tailwind CSS library. [Click here to view the docs](https://tailwindcss.com/docs).

The pages are constructed by building several .js-components and putting them together. Check out the [Next.js documentation](https://nextjs.org/docs) on how to expand on this. For detail pages, [dynamic routes](https://nextjs.org/docs/routing/dynamic-routes) are used.

Forms with validation are built using [Formik](https://formik.org/docs/overview) and [Yup](https://www.npmjs.com/package/yup).

<!-- CONTRIBUTING -->
## Contributing

Any contributions you make are **greatly appreciated!**

If you have a suggestion that would make this project better, please fork the repo and open a pull request. You can also simply open an [issue](https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-oysteinwangen/issues) with the tag "suggestion".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/Suggestion`)
3. Commit your Changes (`git commit -m 'Add feature'`)
4. Push to the Branch (`git push origin feature/Suggestion`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Feel free to contact me on email - [hello@wangen.digital](mailto:hello@wangen.digital)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Tailwind CSS](https://tailwindcss.com/)
* [Next.js](https://nextjs.org/)
* [Formik](https://formik.org/)
* [Yup](https://www.npmjs.com/package/yup)
* [Tolga Musikk | For product images](https://tolgamusikk.no)

<p align="right">(<a href="#top">back to top</a>)</p>
