https://www.youtube.com/watch?v=ZDoiMLqWz2E

--Crear proyecto en blanco
npx create-expo-app@latest nombre del proyecto --template blank

--Estructura que crea del proyecto
ya me lo tira el proyecto de expo pero seria la siguiente:
-> Carpetas : 
    -> Components


    -> app
        -> (auth)
            ->_layout.jsx -- AppLayout ->  auth check and redirect or render <Slot /> return !session ? redirect : slot
            -> cualquier pagina que quiero que este protegida.
    -> login.jsx -- En login hacer el if si tengo session y redireccionar a home con <Redirect href="/rta"/>
    -> _layout.jsx -- RootLayout ->  just render a <Slot /> y anda más.

    -> hooks

--Configurar esLint y prettier
npx expo lint -> crea el archivo lint
npx expo i -- --save-dev prettier eslint-config-prettier eslint-plugin-prettier

.eslintrc.js:

extends: ["expo", "prettier"],
plugins: ["prettier"],
rules : {
    "prettier/prettier": "error",
    "endOfLine": "auto"
}

--Para obtener info de los dispositivos.
npx i expo-constant

--Para tener un safe area en todos los dispositivos.

Uso: envolver la app con el safeAreaProvider y utilizar el 
hook (useSafeAreaInsets) en el componente que se necesite.
npx expo install react-native-safe-area-context.

* componente ActivityIndicator para mostrar un loader.
* opcion mejorada de ScrollView -> FlatList es de ReactNative.
	-> data={"el array de info"}
	-> keyExtractor={{"como debe extraer los datos"}}
		-> ej: (item) => item.id
	-> renderItem={"como renderizar el item"}
		-> ej: ({item}) => <Componente info={info} />

--Para cargar los svg de manera facil:
npx expo i react-native-svg
react-svgr.com convert para react native


--Para animar elementos
Animated de react native.

--Para instalar tailwind en react native (NativeWind)
npm i nativewind@2
npm i --save-dev --save exact tailwindcss@3.3.2
npx tailwindcss init
config el archivo de tailwind

--config en babel (si no lo tengo lo agrego al archivo babel.config.js)
        module.exports = function(api) {
            api.cache(true);
            return{
                presets : ["babel-preset-expo"],
                plugins: ["nativewind/babel"]
            }
        }

--Enrutado y cosas varias
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
cambiar en package.json = "main" -> "expo-router/entry"

en app.json "expo": {
	add -> "scheme" : "nombre de la app"
}

agregar la carpeta "app" y crear:
"las rutas van ser a partir de archivos fisicos"
-> index.js -> renderiza <Main /> -> ruta principal
-> _layout.js -> lo que envuelve a toda mi app 

"importante que las rutas exporten por defecto".

importar Slot -> el hueco que va. (31:00)

--Para navegar:
Se navega con los enlaces (Link).
<Link href ="/la ruta" /> 

expo vector icons 
npm install @expo/vector-icons
icons.expo.fyi

"al crecer el proyecto crear un componente con todo los imports de los icons y exportar los iconos.
centralizar en un solo lado los iconos".

continuar en el minuto 52:11
retomamos..

para hacer rutas dinamicas se crea un archivo:
-> [id].js

agregar la prop al "asChild" para que dentro del Link podamos pasarle un componente.

--hook useLocalSearchParams de expo-router sirve para obtener de forma dinamica la id o lo que le pasamos al link por el href.

const {"[nombre del archivo]"} = useLocalSearchParams(); soy yo el que dictamino el nombre de este parametro.

-- utilizar el Stack de expo router.-> esta como en otro plano distinto. -> sirve para navegar entre pestañas.
    props : screenOptions:{{
        headerStyle
        headerTintColor
        headerTitle
        headerLeft : () => componente()
        lo mismo para el Right
    }}

Stack.screen para pasarle las opciones especificas para cada screen o pagina import desde Stack expo-router.

para crear tabs se crea una carpeta -> (tabs) se utiliza parentesis para poder agrupar rutas en carpetas pq expo ignora los parentesis.

importar los Tabs desde expo router.

Terminado.

Basic estructure and use of componentes:

App.js -> Contiene el <SafeAreaProvider /> que es el componente que determina que el contenido tenga sus margenes arriba y abajo.
       -> Dentro del <SafeAreaProvider /> existe una <View /> que contiene el <StatusBar /> y el <Main />.

todos los archivos serian js.
folder app -> aqui es donde los archivos que se crean aqui seran parte del enrutado de la app, a excepcion de los archivos _layout y ("nombre").
                -> foder -> (tabs) el archivo _layout contiene la configuracion o estilos de los <Tabs />.  
                         -> dentro de (tabs) van los archivos que seran rutas pero que seran parte de los Tabs
                         -> debe tmb tener un archivo index.js que solo llamaria y exportaria a <Main /> 
```
<SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        --Main.jsx--
        <Screen>
          {games.length === 0 ? (
            <ActivityIndicator color={"#fff"} size={"large"} />
          ) : (
            <FlatList
              data={games}
              keyExtractor={(game) => game.slug}
              renderItem={({ item, index }) => (
                <AnimatedGameCard game={item} index={index} />
              )}
            />
          )}
        </Screen>
      </View>
    </SafeAreaProvider>
```

Preguntas que tengo:
* Al cambiar el package json de index.js a expo-router/entry app.jsx deja de tener uso?

--Para tener la geoLocalizacion se necesita:

npx expo install expo-location

dentro pluglins:
"plugins": [
      [
        "expo-location",
        {
          "locationAlwaysAndWhenInUsePermission": "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ]

```
import * as Location from "expo-location";


const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let {coords, timestamp} = await Location.getCurrentPositionAsync({});
    console.log(coords)
    setLocation(coords); 
  };

```
--Para salir del entorno de Expo Go.
npx expo prebuild
npx expo run:android

--Usando React native cookies para el inicio de session
npm i @react-native-cookies/cookies