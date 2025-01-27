import { useNavigate } from "react-router-dom"
import { INavLink, INavLinks } from "./types"
import { useEffect, useState } from "react"

const useNavBar = () => {
    const navigate = useNavigate()
    const isAuthenticated = false
    const currentPath = window.location.pathname
    const brand: INavLink = {path: '/', label: "ChampSync.", color: 'white'}
    const [fixedNavLinks, setFixedNavLinks] = useState<INavLink[]>()
    const [responsiveNavLinks, setResponsiveNavLinks] = useState<INavLink[]>()
    const navLinks: INavLinks = {
        brand,
        fixed: fixedNavLinks,
        responsive: responsiveNavLinks
    }

    useEffect(() => {
        const isAuthRoute = currentPath == '/register' || currentPath == '/login'
        if(isAuthenticated || isAuthRoute){
            setFixedNavLinks([])
        }
        else {
            setFixedNavLinks([
                // {path: '/login', label: 'Login'},
                {path: '/register', label: 'Sign Up', colorScheme: 'purple', variant: 'solid'}
            ])
        }
    }, [isAuthenticated, currentPath])

  const onNavLinkClick = (path: string) => navigate(path)
  
  return {
    navLinks,
    onNavLinkClick
  }
}
export {useNavBar}