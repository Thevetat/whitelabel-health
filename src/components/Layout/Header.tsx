import { useNavigation } from '@/contexts/NavigationContext';

function Header() {
    const { metaTitle } = useNavigation();

    return (
        <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b border-color bg-[#FAFAFA] px-4">
            <h1 className="text-lg md:text-xl font-semibold">
                {metaTitle}
            </h1>
        </header>
    );
}

export default Header;
