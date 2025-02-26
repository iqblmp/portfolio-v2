import TailwindIndicator from "../components/TailwindIndicator";

function Layout({ children, showWelcome }) {
    return (
        <div className="">
            {children}
            {!showWelcome && (
                <footer>
                    <hr className="my-4 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                    <span className="block text-xs lg:text-sm pb-4 lg:pb-5 text-gray-500 text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Iqbal Mauludi Pratama
                        </a>
                        . All Rights Reserved
                    </span>
                </footer>
            )}
            {/* <TailwindIndicator /> */}
        </div>
    );
}

export default Layout;
