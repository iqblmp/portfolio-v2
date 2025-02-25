import TailwindIndicator from "../components/TailwindIndicator";

function Layout({ children, showWelcome }) {
    return (
        <div className="min-w-[600px]">
            {children}
            {!showWelcome && (
                <footer>
                    <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                    <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://flowbite.com/" className="hover:underline">
                            Iqbal Mauludi Pratama
                        </a>
                        . All Rights Reserved
                    </span>
                </footer>
            )}
            <TailwindIndicator />
        </div>
    );
}

export default Layout;
