import * as React from 'react'
// import { Helmet } from 'react-helmet'
// import { css } from '@emotion/react'
// import Button from 'components/Button'

// const pageErrorsStyles = css`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   text-align: center;
// `

// const codeErrorsStyles = css`
//   font-size: 5remm;
//   font-weight: bold;
//   font-style: italic;
// `

// const margin1rem = {
//   margin: '1rem auto'
// }

// const msgErrorsStyles = css({
//   ...margin1rem,
//   fontSize: '1.5rem'
// })

// const SIZE = '250px'

// const gifErrorsStyle = css({
//   ...margin1rem,
//   width: SIZE,
//   height: SIZE,
//   objectFit: 'cover',
//   '&:hover': {
//     transform: 'scale(1.4)'
//   }
// })

const ErrorPage: React.FC = () => {
  return <h1>Página De error</h1>
}

export default ErrorPage

// export default function ErrorPage() {
//   const randomImage = () => {
//     return `https://media.giphy.com/media/1/giphy.gif`
//   }

//   return (
//     <>
//       <Helmet>
//         <title>Error 404 | Giffy</title>
//       </Helmet>
//       <div>
//         <div css={pageErrorsStyles}>
//           <span css={codeErrorsStyles}>404</span>
//           <span css={msgErrorsStyles}>
//             Sometimes gettings lost is not that bad
//           </span>
//           <img css={gifErrorsStyle} src={randomImage()} alt="alt-page-404" />
//           <Button href="/">Go to home</Button>
//         </div>
//       </div>
//     </>
//   )
// }
