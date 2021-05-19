
export default function App({Component, pageProps}) {
  const finalProps = {...pageProps,nuevaProp:'hola'}
  return <Component {...finalProps}></Component>

}