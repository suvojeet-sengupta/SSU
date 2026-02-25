'use client';
import { useRef, useEffect } from 'react';
import { Radio, Shield, TrendingUp, Globe2 } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedCounter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
    const counterRef = useRef(null);
    const containerRef = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(containerRef, { once: true, margin: "-10px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (counterRef.current) {
                // @ts-ignore
                counterRef.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return (
        <span ref={containerRef} className="relative inline-flex justify-center">
            {/* Invisible layout spacer using the final value */}
            <span className="opacity-0">{value}{suffix}</span>
            {/* Visible animating number positioned absolutely over the spacer */}
            <span ref={counterRef} className="absolute inset-0 flex justify-center">{0}{suffix}</span>
        </span>
    );
};

const StatsGrid = () => {
    const stats = [
        {
            icon: <Radio size={28} className="text-cyan-600 dark:text-cyan-400 mb-3 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 transition-colors" />,
            value: 95,
            suffix: "+",
            label: "DSP Partners"
        },
        {
            icon: <Shield size={28} className="text-purple-600 dark:text-purple-400 mb-3 group-hover:text-purple-500 dark:group-hover:text-purple-300 transition-colors" />,
            value: 100,
            suffix: "%",
            label: "Rights Mgmt"
        },
        {
            icon: <TrendingUp size={28} className="text-green-600 dark:text-green-400 mb-3 group-hover:text-green-500 dark:group-hover:text-green-300 transition-colors" />,
            value: 24,
            suffix: "/7",
            label: "Client Support"
        },
        {
            icon: <Globe2 size={28} className="text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors" />,
            value: 150,
            suffix: "+",
            label: "Countries"
        }
    ];

    return (
        <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
                <div key={index} className="group dark:bg-black/40 bg-white border dark:border-white/5 border-black/5 rounded-2xl p-5 flex flex-col items-center justify-center text-center dark:hover:bg-white/5 hover:bg-gray-50 dark:hover:border-white/10 hover:border-black/10 hover:shadow-md dark:shadow-none transition-all duration-300 cursor-pointer">
                    <div className="p-3 dark:bg-white/5 bg-gray-100 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                    </div>
                    <div className="text-xl font-bold dark:text-white text-black mb-1 transition-all flex justify-center">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] sm:text-xs dark:text-gray-400 text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsGrid;
