# Problems using `wingman-fe` package

When we add `import { LocationSuggest } from 'wingman-fe';` to a fresh new `create-react-app` P.O.C. app, we encouter the following error:

<details>
  <summary>ERROR in ./src/App.js</summary>

    ERROR in ./src/App.js 55:35-50
    export 'LocationSuggest' (imported as 'LocationSuggest') was not found in 'wingman-fe' (module has no exports)
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/graphql-tag/lib/index.js 2:0-32
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/graphql-tag/lib'
    @ ./node_modules/@apollo/client/core/index.js 16:0-147 16:0-147 16:0-147 16:0-147 16:0-147 16:0-147
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 1:0-88
    Module not found: Error: Can't resolve './components/ApolloMockProvider/ApolloMockProvider' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 3:0-91
    Module not found: Error: Can't resolve './components/AdSelectionFallback/AdSelectionFallback' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 4:0-100
    Module not found: Error: Can't resolve './components/AdSelectionFallback/AdSelectionFallback.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 6:0-67
    Module not found: Error: Can't resolve './components/BrandSelect/BrandSelect' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 7:0-76
    Module not found: Error: Can't resolve './components/BrandSelect/BrandSelect.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 9:0-85
    Module not found: Error: Can't resolve './components/JobCategorySelect/JobCategorySelect' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 10:0-94
    Module not found: Error: Can't resolve './components/JobCategorySelect/JobCategorySelect.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 11:0-88
    Module not found: Error: Can't resolve './components/JobCategorySuggest/JobCategorySuggest' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 12:0-97
    Module not found: Error: Can't resolve './components/JobCategorySuggest/JobCategorySuggest.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 14:0-79
    Module not found: Error: Can't resolve './components/LocationSuggest/LocationSuggest' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 15:0-88
    Module not found: Error: Can't resolve './components/LocationSuggest/LocationSuggest.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 17:0-94
    Module not found: Error: Can't resolve './components/QuestionnaireBuilder/QuestionnaireBuilder' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 18:0-85
    Module not found: Error: Can't resolve './components/QuestionnaireForm/QuestionnaireForm' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 19:0-103
    Module not found: Error: Can't resolve './components/QuestionnaireQueryInput/QuestionnaireQueryInput' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 20:0-106
    Module not found: Error: Can't resolve './components/QuestionnaireQueryOutput/QuestionnaireQueryOutput' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 22:0-73
    Module not found: Error: Can't resolve './components/SalaryDetails/SalaryDetails' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 23:0-82
    Module not found: Error: Can't resolve './components/SalaryDetails/SalaryDetails.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 25:0-91
    Module not found: Error: Can't resolve './components/SpecifiedPersonForm/SpecifiedPersonForm' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 26:0-100
    Module not found: Error: Can't resolve './components/SpecifiedPersonForm/SpecifiedPersonForm.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 28:0-64
    Module not found: Error: Can't resolve './types/apolloTypePolicies' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/core/LocalState.js 3:0-39
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/core'
    @ ./node_modules/@apollo/client/core/ApolloClient.js 8:0-45 103:26-36
    @ ./node_modules/@apollo/client/core/index.js 2:0-63 2:0-63 2:0-63
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/link/http/createHttpLink.js 3:0-32
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/link/http'
    @ ./node_modules/@apollo/client/link/http/index.js 8:0-53 8:0-53
    @ ./node_modules/@apollo/client/core/index.js 10:0-38 10:0-38
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js 2:0-32
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/link/http'
    @ ./node_modules/@apollo/client/link/http/index.js 4:0-143 4:0-143 4:0-143 4:0-143 4:0-143
    @ ./node_modules/@apollo/client/core/index.js 10:0-38 10:0-38
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/utilities/globals/fix-graphql.js 2:0-33
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/utilities/globals'
    @ ./node_modules/@apollo/client/utilities/globals/index.js 7:0-58 8:0-22
    @ ./node_modules/@apollo/client/core/index.js 1:0-52 15:13-16
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/utilities/graphql/directives.js 2:0-32
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/utilities/graphql'
    @ ./node_modules/@apollo/client/utilities/index.js 2:0-132 2:0-132 2:0-132 2:0-132 2:0-132 2:0-132
    @ ./node_modules/@apollo/client/core/index.js 12:0-79 12:0-79 12:0-79 12:0-79
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/@apollo/client/utilities/graphql/transform.js 3:0-32
    Module not found: Error: Can't resolve 'graphql' in '/Users/user/Projects/wingman-test-app/node_modules/@apollo/client/utilities/graphql'
    @ ./node_modules/@apollo/client/utilities/index.js 6:0-253 6:0-253 6:0-253 6:0-253 6:0-253 6:0-253 6:0-253 6:0-253
    @ ./node_modules/@apollo/client/core/index.js 12:0-79 12:0-79 12:0-79 12:0-79
    @ ./node_modules/@apollo/client/index.js 1:0-32 1:0-32
    @ ./src/App.js 9:0-49 15:17-32 71:10-25
    @ ./src/index.js 7:0-24 11:33-36

    27 errors have detailed information that is not shown.
    Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

    webpack 5.70.0 compiled with 28 errors in 7982 ms

</details>

## Expected Outcome

Running `yarn start` would expect the application start normally, rendering the `LocationSuggest` Seek widget.

## Dev Setup

```
yarn i
```

## Things we tried

We try to install `graphql` as a dependency and the error we faced was:

<details>
  <summary>ERROR in ./src/App.js</summary>

    ERROR in ./src/App.js 55:35-50
    export 'LocationSuggest' (imported as 'LocationSuggest') was not found in 'wingman-fe' (module has no exports)
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 1:0-88
    Module not found: Error: Can't resolve './components/ApolloMockProvider/ApolloMockProvider' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 3:0-91
    Module not found: Error: Can't resolve './components/AdSelectionFallback/AdSelectionFallback' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 4:0-100
    Module not found: Error: Can't resolve './components/AdSelectionFallback/AdSelectionFallback.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 6:0-67
    Module not found: Error: Can't resolve './components/BrandSelect/BrandSelect' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 7:0-76
    Module not found: Error: Can't resolve './components/BrandSelect/BrandSelect.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 9:0-85
    Module not found: Error: Can't resolve './components/JobCategorySelect/JobCategorySelect' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 10:0-94
    Module not found: Error: Can't resolve './components/JobCategorySelect/JobCategorySelect.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 11:0-88
    Module not found: Error: Can't resolve './components/JobCategorySuggest/JobCategorySuggest' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 12:0-97
    Module not found: Error: Can't resolve './components/JobCategorySuggest/JobCategorySuggest.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 14:0-79
    Module not found: Error: Can't resolve './components/LocationSuggest/LocationSuggest' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 15:0-88
    Module not found: Error: Can't resolve './components/LocationSuggest/LocationSuggest.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 17:0-94
    Module not found: Error: Can't resolve './components/QuestionnaireBuilder/QuestionnaireBuilder' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 18:0-85
    Module not found: Error: Can't resolve './components/QuestionnaireForm/QuestionnaireForm' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 19:0-103
    Module not found: Error: Can't resolve './components/QuestionnaireQueryInput/QuestionnaireQueryInput' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 20:0-106
    Module not found: Error: Can't resolve './components/QuestionnaireQueryOutput/QuestionnaireQueryOutput' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 22:0-73
    Module not found: Error: Can't resolve './components/SalaryDetails/SalaryDetails' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 23:0-82
    Module not found: Error: Can't resolve './components/SalaryDetails/SalaryDetails.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 25:0-91
    Module not found: Error: Can't resolve './components/SpecifiedPersonForm/SpecifiedPersonForm' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 26:0-100
    Module not found: Error: Can't resolve './components/SpecifiedPersonForm/SpecifiedPersonForm.mock' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    ERROR in ./node_modules/wingman-fe/lib/index.ts 28:0-64
    Module not found: Error: Can't resolve './types/apolloTypePolicies' in '/Users/user/Projects/wingman-test-app/node_modules/wingman-fe/lib'
    @ ./src/App.js 8:0-45 55:35-50
    @ ./src/index.js 7:0-24 11:33-36

    20 errors have detailed information that is not shown.
    Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

    webpack 5.70.0 compiled with 21 errors in 11460 ms

</details>
