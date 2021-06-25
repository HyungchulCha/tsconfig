const tsconfig = {
  files: ['a.ts', 'b.ts'], // 프로그램에 포함 할 파일 허용 목록을 지정합니다. 파일을 찾을 수 없으면 오류가 발생합니다. 파일 수가 적고 많은 파일을 참조하기 위해 glob을 사용할 필요가 없을 때 유용합니다.
  extends: './config/base', // 기본파일의 구성이 먼저 로드된 다음 상속하는 구성파일의 구성으로 재정의됩니다. 구성파일에서 발견된 모든 상대경로는 원래 구성파일을 기준으로 확인됩니다.
  /*
    config/base.json
      {
        compilerOptions: {
          noImplictAny: true,
          strictNullChecks: true
        }
      }    
  */
  include: ['src/**/*'], // 변환할 폴더 지정
  /*
    *: 해당 디렉토리의 모든 파일 검색
    ?: 해당 디렉토리 안에 파일의 이름 중 한글자라도 맞으면 해당
    **: 하위 디렉토리를 재귀적으로 접근(하위의 하위 디렉토리가 존재하는 경우 반복해서 접근)
    와일트 카드패턴에 해당하는 파일 확장자는 js, jsx, ts, tsx, .d.ts
  */
  exclude: [], // include 반대, 설정하지 않으면 [node_modules, bower_components, jspm_package], outDir 같은 폴더를 제외
  /*
    @types 라이브러리와 typeRoots - node_modules를 제외하지만 써드파티 라이브러리의 타입을 정의해놓은 @types 폴더는 컴파일에 포함
    @types의 기본경로를 변경하고 싶다면
    compilerOptions: {
      typeRoots: ['./my-types'] - node_modules/@types -> node_modules/my-types
    }
  */
  compilerOptions: {
    /* Visit https://aka.ms/tsconfig.json to read more about this file */

    /* Basic Options */
    incremental: true /* Enable incremental compilation */,
    target: 'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */,
    module: 'commonjs' /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */,
    lib: [] /* Specify library files to be included in the compilation. */,
    allowJs: false, // .ts및 .tsx파일 대신 프로젝트 내에서 JavaScript 파일을 가져올 수 있습니다.
    checkJs: false, // allowJs와 함께 작동. checkJs이 활성화되면 JavaScript 파일에 오류가보고됩니다. 이는 //@ts-check 프로젝트에 포함된 모든 JavaScript 파일의 맨 위에 포함하는 것과 같습니다.
    jsx: 'preserve' /* Specify JSX code generation: 'preserve', 'react-native', 'react', 'react-jsx' or 'react-jsxdev'. */,
    declaration: true, // .d.ts프로젝트 내의 모든 TypeScript 또는 JavaScript 파일에 대한 파일을 생성 합니다. 이러한 .d.ts파일은 모듈의 외부 API를 설명하는 유형 정의 파일입니다.
    declarationMap: true /* Generates a sourcemap for each corresponding '.d.ts' file. */,
    sourceMap: true /* Generates corresponding '.map' file. */,
    outFile: './' /* Concatenate and emit output to single file. */,
    outDir: './build' /* Redirect output structure to the directory. */,
    rootDir: './' /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    composite: false, // 이 composite옵션은 빌드 도구 ( --build모드 에서 TypeScript 자체 포함 )가 프로젝트가 아직 빌드되었는지 여부를 신속하게 결정할 수 있도록하는 특정 제약 조건을 적용합니다.
    tsBuildInfoFile: './' /* Specify file to store incremental compilation information */,
    removeComments: true /* Do not emit comments to output. */,
    noEmit: true /* Do not emit outputs. */,
    importHelpers: true /* Import emit helpers from 'tslib'. */,
    downlevelIteration: true /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */,
    isolatedModules: true /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */,

    /* Strict Type-Checking Options */
    strict: true /* Enable all strict type-checking options. */,
    noImplicitAny: true /* Raise error on expressions and declarations with an implied 'any' type. */,
    strictNullChecks: true /* Enable strict null checks. */,
    strictFunctionTypes: true /* Enable strict checking of function types. */,
    strictBindCallApply: true /* Enable strict 'bind', 'call', and 'apply' methods on functions. */,
    strictPropertyInitialization: true /* Enable strict checking of property initialization in classes. */,
    noImplicitThis: true /* Raise error on 'this' expressions with an implied 'any' type. */,
    alwaysStrict: true /* Parse in strict mode and emit "use strict" for each source file. */,

    /* Additional Checks */
    noUnusedLocals: true /* Report errors on unused locals. */,
    noUnusedParameters: true /* Report errors on unused parameters. */,
    noImplicitReturns: true /* Report error when not all code paths in function return a value. */,
    noFallthroughCasesInSwitch: true /* Report errors for fallthrough cases in switch statement. */,
    noUncheckedIndexedAccess: true /* Include 'undefined' in index signature results */,
    noImplicitOverride: true /* Ensure overriding members in derived classes are marked with an 'override' modifier. */,
    noPropertyAccessFromIndexSignature: true /* Require undeclared properties from index signatures to use element accesses. */,

    /* Module Resolution Options */
    moduleResolution: 'node' /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
    baseUrl: './src' /* Base directory to resolve non-absolute module names. */,
    paths: {} /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */,
    rootDirs: [] /* List of root folders whose combined content represents the structure of the project at runtime. */,
    typeRoots: [] /* List of folders to include type definitions from. */,
    types: [] /* Type declaration files to be included in compilation. */,
    allowSyntheticDefaultImports: true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
    esModuleInterop: true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
    preserveSymlinks: true /* Do not resolve the real path of symlinks. */,
    allowUmdGlobalAccess: true /* Allow accessing UMD globals from modules. */,

    /* Source Map Options */
    sourceRoot: '' /* Specify the location where debugger should locate TypeScript files instead of source locations. */,
    mapRoot: '' /* Specify the location where debugger should locate map files instead of generated locations. */,
    inlineSourceMap: true /* Emit a single file with source maps instead of having a separate file. */,
    inlineSources: true /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */,

    /* Experimental Options */
    experimentalDecorators: true /* Enables experimental support for ES7 decorators. */,
    emitDecoratorMetadata: true /* Enables experimental support for emitting type metadata for decorators. */,

    /* Advanced Options */
    skipLibCheck: true /* Skip type checking of declaration files. */,
    forceConsistentCasingInFileNames: true /* Disallow inconsistently-cased references to the same file. */,
  },
  watchOptions: '',
  typeAcquisition: '',
};
