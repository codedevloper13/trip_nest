/** @format */

import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='bg-primary'>
			<div className='container mx-auto flex justify-between'>
				<span className='py-5'>
					<Link to='/'>
						<img src='/src/assets/images/logo-White.png' width={260} />
					</Link>
				</span>
				<span className='flex space-x-2'>
					<Link
						to='/sign-in'
						className='flex items-center text-blue-700 px-4 font-medium border bg-white border-border rounded hover:bg-gray-100 m-6'>
						Sign In
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Header;
