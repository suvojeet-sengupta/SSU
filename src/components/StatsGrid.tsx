import { Radio, Shield, TrendingUp, Globe2 } from 'lucide-react';

const StatsGrid = () => {
    const stats = [
        {
            icon: <Radio size={28} className="text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors" />,
            value: "95+",
            label: "DSP Partners"
        },
        {
            icon: <Shield size={28} className="text-purple-400 mb-3 group-hover:text-purple-300 transition-colors" />,
            value: "100%",
            label: "Rights Mgmt"
        },
        {
            icon: <TrendingUp size={28} className="text-green-400 mb-3 group-hover:text-green-300 transition-colors" />,
            value: "Real-time",
            label: "Analytics"
        },
        {
            icon: <Globe2 size={28} className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />,
            value: "Global",
            label: "Distribution"
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="group bg-black/40 border border-white/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
