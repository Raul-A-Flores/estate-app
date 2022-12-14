import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Flex, Text, Avatar} from '@chakra-ui/react'
import { FaBed, FaBath} from 'react-icons/fa'
import { BsGridFill} from 'react-icons/bs'
import { GoVerified} from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../../assets/images/house.jpg'
import Property from '../../components/Property'
import { baseUrl, fetchApi} from '../../utils/fetchApi'
import ImageScrollBar from '../../components/ImageScrollBar'

const PropertyDetails =({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } })=>(

    <Box maxWidth='1000px' margin='auto' p='4'>
    {photos && <ImageScrollBar data={photos} />}
    <Box w='full' p='6'>
        <Flex paddingTop ='2' alignItems='center' justifyContent='space-between'>
            <Flex alignItems='center'>
                <Box paddingRight='3' cppr='green.300'>{isVerified && <GoVerified />}

                </Box>
            <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency.logo?.url} />
          </Box> 
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} <BsGridFill />
        </Flex>
        <Text fontSize='lg' >
            {title}
        </Text>
        <Text lineHeight='2' color='gray.600'>
            {description}   
        </Text>
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Type</Text>
            <Text fontWeight='bold'>{type}</Text>
        </Flex>
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>Purpose</Text>
            <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
            <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
            <Text>FurnishingStatus</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
        </Flex>
        )}
        </Flex>
        <Box>
                {amenities.length && <Text fontWeight='black' fontSize='2xl'>Amenities</Text>}
                <Flex flexWrap='wrap'>
                    {amenities.map((item) => (
                        item.amenities.map((amenity) =>(
                            <Text
                            fontWeight='bold'
                            color='blue.400'
                            fontSize='l'
                            p='2'
                            bg='gray.200'
                            m='1'
                            borderRadius='5'
                            key={amenity.text}>{amenity.text}</Text>
                        ))
                    ))}
                </Flex>
        </Box>
    </Box>
)

export default PropertyDetails ;


export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
    return {
      props: {
        propertyDetails: data,
      },
    };
  }
  