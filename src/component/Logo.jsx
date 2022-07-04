import { Image } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
	return <Image src={process.env.PUBLIC_URL + '/logo-xl.png'} layout={'fill'} height={'25px'} align={'center'} />;
};

export default Logo;
