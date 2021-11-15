const Header = () => {
    return ( 
        <div className='flex justify-around px-4'>
            <h1>Egroup-test-project</h1>
            <strong className='text-blue-500 duration-500 hover:scale-125'>
                <a href="https://github.com/rumiani/egroup-test-project" target="_blank" title='Source Code'>
                    Source Code:
                    <i className="fab fa-github mx-4 text-xl "></i>
                </a>
            </strong>
        </div>
     );
}
 
export default Header;