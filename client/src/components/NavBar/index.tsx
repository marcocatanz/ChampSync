import './style.css'
import { Button, Drawer, DrawerCloseButton, DrawerContent, useDisclosure, DrawerOverlay, DrawerFooter, DrawerHeader, DrawerBody } from "@chakra-ui/react"
import { CiMenuBurger } from "react-icons/ci";
import { useNavBar } from './useNavBar.tsx';
const NavBar = () => {
    const {
        navLinks,
        onNavLinkClick
    } = useNavBar()
    const { isOpen, onOpen, onClose } = useDisclosure()
 

    const renderNavBrand = () => {
        const link = navLinks.brand
        if(link) return (
            <div className={`nav-brand`} onClick={()=>onNavLinkClick(link.path)}>
                {link.label}
            </div>
        )
        else return null
    }

    const renderFIxedNavLinks = () => {
        if(navLinks.fixed) return navLinks.fixed.map((link) => {
            return (
                <Button 
                    key={`navlink_${link.label}`}
                    variant={link.variant || 'ghost'} 
                    colorScheme={link.colorScheme || 'whiteAlpha'} 
                    color={link.color || 'white'} 
                    onClick={()=>onNavLinkClick(link.path)}
                >
                    {link.label}
                </Button>
            )
        })
    }

    const renderResponsiveNavLinks = () => {
        if(navLinks.responsive) return navLinks.responsive.map((link) => {
            return (
                <Button 
                    key={`navlink_${link.label}`}
                    variant={link.variant || 'ghost'} 
                    colorScheme={link.colorScheme || 'whiteAlpha'} 
                    color={link.color || 'white'} 
                    onClick={()=>onNavLinkClick(link.path)}
                    className='nav-item-responsive'
                >
                    {link.label}
                </Button>
            )
        })
    }
    
    const renderMobileMenu = () => {
         if(navLinks.responsive) return (
            <div className="nav-mobile-menu">
                <Button onClick={onOpen}>
                    <CiMenuBurger className="nav-hamburger-icon"/>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    onClose={onClose}
                    placement="left"
                >
                    <DrawerOverlay />
                    <DrawerContent backgroundColor={'#121219'}>
                        <DrawerCloseButton color={'white'}/>
                        <DrawerHeader></DrawerHeader>
                        <DrawerBody className='nav-mobile-body'>
                            {renderResponsiveNavLinks()}
                        </DrawerBody>
                        <DrawerFooter></DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        )
    }

    return (
        <div className="nav-container">
            <div className="nav-left">
                {renderMobileMenu()}
                {renderNavBrand()}
            </div>
            <div className="nav-right">
                {renderResponsiveNavLinks()}
                {renderFIxedNavLinks()}
            </div>
        </div>
    )
}

export {NavBar}