import React, {useState, useEffect} from 'react';

import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsChatSquare, BsClipboardData } from 'react-icons/bs';
import { GiAchievement, GiMaterialsScience } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Nav = () => {

	const [offset, setOffset] = useState(-200);

	useEffect(() => {
		const updateOffset = () => {
			setOffset(window.innerWidth <= 900 ? 0 : -200);
		};

		window.addEventListener('resize', updateOffset);
		updateOffset();
		return () => window.removeEventListener('resize', updateOffset);
	}, []);

	return (
		<nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
			<div className='container mx-auto'>
				<div className='w-full bg-black/20 h-[97px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center'>
					<Link
						to='home'
						activeClass='active'
						smooth={true}
						spy={true}
					
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<BiHomeAlt />
					</Link>
					<Link
						to='about'
						activeClass='active'
						smooth={true}
						spy={true}
				
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<BiUser />
					</Link>
					<Link
						to='projects'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={offset}
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<BsClipboardData />
					</Link>
					<Link
						to='technologies'
						activeClass='active'
						smooth={true}
						spy={true}
						offset={-10}
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<GiAchievement />
					</Link>
					<Link
						to='skills'
						activeClass='active'
						smooth={true}
						spy={true}
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<GiMaterialsScience />
					</Link>
					<Link
						to='contact'
						activeClass='active'
						smooth={true}
						spy={true}
						
						className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
					>
						<BsChatSquare />
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
