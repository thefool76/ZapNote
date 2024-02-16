'use client'
import React, { useState } from 'react'
import { AuthUser } from '@supabase/supabase-js';
import { Card,CardContent,CardDescription,CardHeader, CardTitle } from './ui/card';
import EmojiPicker from '@/components/emojipicker';

  interface DashboardSetupProps{
    user:AuthUser;
    subscription: {} | null;
  }

const Dashboardsetup: React.FC<DashboardSetupProps> = ({
  subscription,
  user,
}) => {
  const [selectedEmoji, setSelectedEmoji] = useState('')
  return (
    <Card className='w-[800px] h-screen sm:h-auto'>
      <CardHeader>
        <CardTitle>
          Create A Workspace
        </CardTitle>
        <CardDescription>
          Setting up your workspace!. You can add collaborators later on from the workspace setting tab.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={() => {}}>
          <div className='flex flex-col gap-4'>
            <div className='text-5xl'>
            <EmojiPicker getValue={(emoji) => setSelectedEmoji(emoji)}>
                  {selectedEmoji}
                </EmojiPicker>
            </div>
          </div>

        </form>
      </CardContent>
    </Card>
  )
}

export default Dashboardsetup