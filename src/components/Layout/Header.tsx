import { useNavigation } from '@/contexts/NavigationContext';

function Header() {
    const { currentPageName } = useNavigation();

    return (
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b border-color bg-[#fafafa] px-4">
            <h1 className="text-lg md:text-xl font-semibold text-[#33285A]">
                {currentPageName}
            </h1>
        </header>
    );
}

export default Header;
