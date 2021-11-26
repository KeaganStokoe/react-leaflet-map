# 26 November, 2021

- When trying to get the initial map to render, there is some unexpected behaviour. At first, you get an error about failure to compile. The error says `Module parse failed: Unexpected token (10:41)`. 
- To get around it, follow the steps in here - https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat
    1. Update browser list in package.json
    2. Delete node modules
    3. Run `yarn` to reinstall dependencies
   
- The second weird behaviour is that the map just renders white