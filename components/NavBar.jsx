import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import { Menu, MenuButton, MenuList, IconButton, Flex, Box, Spacer, MenuItem} from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout} from 'react-icons/fc'
import {BsSearch} from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import logo from '../assets/images/Logo.png'

const NavBar = () => (
    <Flex p='2' borderBottom='1px' borderColor='gray.100'>
        <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
            <Image src={logo}
                width={250}
                height={80}
                objectFit="contain"
            />
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outlined' color='red.400' />
            <MenuList>
                <Link href='/' passHref>
                <MenuItem icon={<FcHome />}>Home</MenuItem>
                </Link>
                <Link href='/search' passHref>
                <MenuItem icon={<BsSearch />}>Search</MenuItem>
                </Link>
                <Link href='/search?purpose=for-sale' passHref>
                <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                </Link>
                <Link href='/search?purpose=for-rent' passHref>
                <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                </Link>
            </MenuList>
            </Menu>
        </Box>
    </Flex>


)

export default NavBar