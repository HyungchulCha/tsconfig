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
    /* Basic Options */
    incremental: true, // 이전 컴파일에서 디스크의 파일로 정보를 읽거나/기록하여 증분 컴파일을 활성화합니다. 이 파일은 --tsBuildInfoFile 플래그로 컨트롤합니다. composite이 켜져있으면 true 아니면 false
    target: 'es5' /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ES2021', or 'ESNEXT'. */,
    module: 'commonjs',
    /*
      모듈 코드 생성 지정: "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" 또는 "ESNext".
      "AMD"와 "System"만 --outFile과 함께 사용할 수 있습니다.
      "ES6"와 "ES2015" 값은 "ES5" 또는 이하를 대상으로 할 때 사용할 수 있습니다.
     */
    lib: [],
    /*
      ES5, ES6, ES2015, ES7, ES2016, ES2017, ES2018, ESNext, DOM, DOM.Iterable, WebWorker, ScriptHost, ES2015.Core, ES2015.Collection, ES2015.Generator, ES2015.Iterable, ES2015.Promise, ES2015.Proxy, ES2015.Reflect, ES2015.Symbol, ES2015.Symbol.WellKnown, ES2016.Array.Include, ES2017.object, ES2017.Intl, ES2017.SharedMemory, ES2017.String, ES2017.TypedArrays, ES2018.Intl, ES2018.Promise, ES2018.RegExp, ESNext.AsyncIterable, ESNext.Array, ESNext.Intl, ESNext.Symbol
      주의사항
      --lib가 지정되지 않으면 라이브러리의 기본 리스트가 삽입됩니다. 주입되는 기본 라이브러리는 다음과 같습니다.
      --target ES5: DOM,ES5,ScriptHost
      --target ES6: DOM,ES6,DOM.Iterable,ScriptHost
     */
    allowJs: false, // JavaScript 파일의 컴파일을 허용합니다.
    checkJs: false, // .js 파일에 오류를 보고합니다. allowJs와 함께 사용하세요.
    jsx: 'preserve', // .tsx 파일에서 JSX 지원: "React", "Preserve", "react-native". JSX를 확인하세요.
    declaration: false, // 해당하는 .d.ts 파일을 생성합니다.
    declarationMap: false, // 해당하는 '.d.ts'파일 각각에 대한 소스 맵을 생성합니다.
    sourceMap: true /* Generates corresponding '.map' file. */,
    outFile: './' /* Concatenate and emit output to single file. */,
    outDir: './build' /* Redirect output structure to the directory. */,
    rootDir: './' /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
    composite: true, // TypeScript가 프로젝트를 컴파일하기 위해 참조된 프로젝트의 출력을 찾을 위치를 결정할 수 있는지 확인합니다.
    tsBuildInfoFile: './' /* Specify file to store incremental compilation information */,
    removeComments: true /* Do not emit comments to output. */,
    noEmit: true /* Do not emit outputs. */,
    importHelpers: false, // tslib에서 방출된 헬퍼를 import 합니다.
    downlevelIteration: false, // ES5 또는 ES3를 대상으로 할 때 for..of, 스프레드와 구조분해할당에서 이터러블을 완전히 지원합니다.
    isolatedModules: false, // 추가 검사를 수행하여 별도의 컴파일 (예를 들어 트랜스파일된 모듈 혹은 @babel/plugin-transform-typescript) 이 안전한지 확인합니다

    /* Strict Type-Checking Options */
    strict: true /* Enable all strict type-checking options. */,
    noImplicitAny: true /* Raise error on expressions and declarations with an implied 'any' type. */,
    strictNullChecks: true /* Enable strict null checks. */,
    strictFunctionTypes: true /* Enable strict checking of function types. */,
    strictBindCallApply: true /* Enable strict 'bind', 'call', and 'apply' methods on functions. */,
    strictPropertyInitialization: true /* Enable strict checking of property initialization in classes. */,
    noImplicitThis: true /* Raise error on 'this' expressions with an implied 'any' type. */,
    alwaysStrict: false, // strict mode에서 파싱하고 각 소스 파일에 대해 "use strict"를 내보냅니다.

    /* Additional Checks */
    noUnusedLocals: true /* Report errors on unused locals. */,
    noUnusedParameters: true /* Report errors on unused parameters. */,
    noImplicitReturns: true /* Report error when not all code paths in function return a value. */,
    noFallthroughCasesInSwitch: true /* Report errors for fallthrough cases in switch statement. */,
    noUncheckedIndexedAccess: true /* Include 'undefined' in index signature results */,
    noImplicitOverride: true /* Ensure overriding members in derived classes are marked with an 'override' modifier. */,
    noPropertyAccessFromIndexSignature: true /* Require undeclared properties from index signatures to use element accesses. */,

    /* Module Resolution Options */
    moduleResolution: 'node', // 모듈 해석 방법 결정. Node.js/io.js 스타일 해석의 경우, "Node" 또는 "Classic" 중 하나입니다.
    baseUrl: './src', // 비-상대적 모듈 이름을 해석하기 위한 기본 디렉터리.
    paths: {} /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */,
    rootDirs: [] /* List of root folders whose combined content represents the structure of the project at runtime. */,
    typeRoots: [] /* List of folders to include type definitions from. */,
    types: [] /* Type declaration files to be included in compilation. */,
    allowSyntheticDefaultImports: false, // default export가 없는 모듈에서 default imports를 허용합니다. 코드 방출에는 영향을 주지 않으며, 타입 검사만 수행합니다.
    esModuleInterop: false, // 런타임 바벨 생태계 호환성을 위한 __importStar와 __importDefault 헬퍼를 내보내고 타입 시스템 호환성을 위해 --allowSyntheticDefaultImports를 활성화합니다.
    preserveSymlinks: true /* Do not resolve the real path of symlinks. */,
    allowUmdGlobalAccess: false, // 모듈에서 전역 UMD 접근을 허용합니다.

    /* Source Map Options */
    sourceRoot: '' /* Specify the location where debugger should locate TypeScript files instead of source locations. */,
    mapRoot: '', // 디버거가 생성된 위치가 아닌 맵 파일의 위치를 지정합니다. .map 파일이 .js 파일과 다른 위치에 런타임 시 위치할 경우 이 옵션을 사용하세요. 지정된 위치는 sourceMap에 포함되어 맵 파일이 위치할 디버거를 지정합니다. 이 플래그는 지정된 경로를 작성하지 않고 해당 위치에 맵 파일을 생성합니다. 대신 파일을 지정된 경로로 이동하는 빌드 후 단계를 작성하십시오.
    inlineSourceMap: false, // 별도의 파일 대신 소스 맵으로 단일 파일을 내보냅니다.
    inlineSources: false, // 단일 파일 내에서 소스 맵과 함께 소스를 내보냅니다. --inlineSourceMap 또는 --sourceMap을 설정해야 합니다.

    /* Experimental Options */
    experimentalDecorators: false, // ES 데코레이터에 대한 실험적인 지원을 사용하도록 활성화합니다.
    emitDecoratorMetadata: false, // 소스에 데코레이터 선언에 대한 설계-타입 메타 데이터를 내보냅니다.

    /* Advanced Options */
    skipLibCheck: true /* Skip type checking of declaration files. */,
    forceConsistentCasingInFileNames: false, // 동일 파일 참조에 대해 일관성 없는 대소문자를 비활성화합니다.

    /* Etc */
    allowUnreachableCode: false, // 도달할 수 없는 코드에 대한 오류를 보고하지 않습니다.
    allowUnusedLabels: false, // 사용되지 않는 레이블에 대한 오류를 보고하지 않습니다.
    assumeChangesOnlyAffectDirectDependencies: false, // 파일 안에서의 변경은 파일이 직접 의존하는 파일에만 영향을 미친다고 가정하고 '--incremental' 및 '-watch'로 다시 컴파일 합니다.
    build: false, // 프로젝트 레퍼런스에서 지정한 이 프로젝트와 프로젝트의 모든 의존성을 빌드 합니다.
    charset: 'utf8', // 입력 파일의 문자 집합입니다.
    declarationDir: '', // 생성된 선언 파일의 출력 디렉토리입니다.
    diagnostics: false, // 진단 정보를 보여줍니다.
    disableSizeLimit: false, // JavaScript 프로젝트의 사이즈 제한을 비활성화합니다.
    emitBOM: false, // 출력 파일의 시작 부분에 UTF-8 바이트 순서표(BOM)를 내보냅니다.
    emitDeclarationOnly: false, // '.d.ts' 선언 파일만 내보냅니다.
    extendedDiagnostics: false, // 자세한 진단 정보를 표시합니다
    generateCpuProfile: 'profile.cpuprofile', // 주어진 경로에 cpu 프로필을 생성합니다. 파일 경로 대신 존재하는 디렉터리 이름을 전달하면 타임스탬프 이름이 지정된 프로필이 그 디렉터리에 대신 생성됩니다.
    importsNotUsedAsValues: 'remove', // 타입을 위해서만 사용하는 import를 위한 내보내기/검사 동작을 지정합니다. "remove"와 "preserve"는 사이드 이펙트를 위해 사용하지 않는 import를 내보낼지 지정하고, "error"는 타입을 위해서만 사용하는 import는 import type으로 작성하게 강제합니다.
    jsxFactory: 'React.createElement', // 리액트 JSX 방출을 대상으로 할 때 사용할 JSX 팩토리 함수를 지정합니다.
    keyofStringsOnly: false, // keyof를 문자열 값으로 된 프로퍼티 이름에만 적용합니다 (숫자나 심벌에서는 안 됨).
    useDefineForClassFields: false, // 클래스 필드를 ECMAScript-표준 시맨틱으로 내보냅니다.
    listEmittedFiles: false, // 컴파일의 일부로 생성된 파일의 이름을 출력합니다.
    listFiles: false, // 컴파일에 포함된 파일의 이름을 출력합니다.
    locale: '',
    /*
      오류 메시지를 표시하는 데 사용할 지역화
      영어 (US): en, 체코어: cs, 독일어: de, 스페인어: es, 프랑스어: fr, 이탈리아어: it, 일본어: ja, 한국어: ko, 폴란드어: pl, 포르투갈어(브라질): pt-BR, 러시아어: ru, 터키어: tr, 중국어 간체: zh-CN, 중국어 번체: zh-TW
     */
    maxNodeModuleJsDepth: 0, // node_modules 및 로드 JavaScript 파일 아래에서 검색할 최대 의존성 깊이. allowJs에만 적용됩니다.
    newLine: '', // 파일을 내보낼 때 사용되는 지정된 라인 끝의 시퀀스 사용: "crlf" (윈도우) 또는 "lf" (유닉스)."
  },
  watchOptions: '',
  typeAcquisition: '',
};
/*
  --help, -h: 도움말을 출력합니다.
  --init: TypeScript 프로젝트를 초기화하고 tsconfig.json 파일을 생성합니다.
 */
