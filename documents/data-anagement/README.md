In the project directory, we will have 2 types of data:

## Long term data:

Data that is used in the application, such as the data of the current user, the data of the current session, the data of the current language, etc. This data is stored in the `Jotai` folder.

## Short term data:

Data that is used in a page, that is from the API for a specific page. This data is stored in the `pages` folder. We will get the data through the `SWR/React Query` library. The data will be stored in the page's props. If we need to share this data with children components, we will use the `context` API.
