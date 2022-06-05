import React, { FC, ReactNode } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import ScrollToTop from 'react-scroll-to-top'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyles, { theme } from '../../GlobalStyles'
import { Header } from './Header'
type PropsType = {
   children: ReactNode
}
const StyledIcon = styled(IoIosArrowUp)`
   color: ${({ theme }) => theme.colors.textSecondary};
`
const Layout: FC<PropsType> = ({ children }) => {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <ScrollToTop
            component={<StyledIcon />}
            style={{
               backgroundColor: theme.colors.primary,
               borderRadius: '50%',
            }}
         />
         <Header />
         {children}
      </ThemeProvider>
   )
}

export default Layout
