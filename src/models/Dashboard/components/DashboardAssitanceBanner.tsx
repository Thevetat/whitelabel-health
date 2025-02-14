import { Icon } from '@iconify/react';

function DashboardAssistanceBanner() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-[#EFF4F0] rounded-lg px-6 py-3 border border-[#9AAB7B] text-lg md:text-xl text-center md:text-start">
            <div className="flex flex-col md:flex-row items-center gap-4 ">
                <Icon icon="mingcute:phone-success-line" className="size-8 text-[#9AAB7B]" />
                <div className="text-[#121212]">Need assitance? Contact your dedicated care guide.</div>
            </div>
            <div className="text-[#121212]">
                Call <a href="tel:18005555555" className='text-text-main'> 1(800) 555-5555</a>
            </div>
        </div>
    )
}

export default DashboardAssistanceBanner
