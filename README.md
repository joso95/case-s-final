# Good to know

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Modules needed to run the app

### 'npm install axios'

### 'npm install @material-ui/core'

# About the components

## defaultShow component

The defaultShow component is the first component that is rendered in the app.
It uses Axios to fetch the data, and forwards this to the vessels component.

## vessels component

The vessesl component receives its data from the defaultShow component and maps through it to create a table of the vessels.
This component uses materialUI for its tables.

## certificates
The certificates component is not rendered until the shipIndex state is changed from null in the defaultShow component.
When the shipIndex is changed the component uses data from the defaultShow component and renders the relevant certificates from the data using indexing.
