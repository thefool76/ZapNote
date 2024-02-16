'use client'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Popover,PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';


interface emojipickerProps {
    children: React.ReactNode;
    getValue?:(emoji: string)=> void;
}
const emojipicker:React.FC<emojipickerProps> = ({children, getValue}) => {
    const route = useRouter();
    const Picker = dynamic(() => import ('emoji-picker-react'));
    const onClick = (selectedEmoji: any) => {
        if (getValue) getValue(selectedEmoji.emoji)
    }
  return (
    <div className='flex items-center'>
        <Popover>
            <PopoverTrigger className='cursor-pointer'>
                {children}
            </PopoverTrigger>
            <PopoverContent className='p-0 border-none'>
                <Picker onEmojiClick={onClick}/>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default emojipicker