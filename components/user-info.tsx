import { ExtendedUser } from '@/next-auth'
import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'

interface UserInfoProps {
    user?: ExtendedUser
    label: string
}
const UserInfo = ({ user, label }: UserInfoProps) => {
    return (
        <Card>
            <CardHeader className='w-[600px] shadow-md'>
                <p className='text-2xl font-semibold texte-center'>{label}</p>
            </CardHeader>
            <CardContent className='space-y-4'>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm  '>
                    <p className='text-sm font-medium'>ID</p>
                    <p className=' truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-medium'>{user?.id}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm  '>
                    <p className='text-sm font-medium'>Name</p>
                    <p className=' truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-medium'>{user?.name}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm  '>
                    <p className='text-sm font-medium'>Email</p>
                    <p className=' truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-medium'>{user?.email}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm  '>
                    <p className='text-sm font-medium'>Role</p>
                    <p className=' truncate text-xs max-w-[180px] font-mono p-1 bg-slate-100 rounded-medium'>{user?.role}</p>
                </div>
                <div className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm  '>
                    <p className='text-sm font-medium'>Two Factor Authentification </p>
                    <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>{user?.isTwoFactorEnabled ? "ON" : "OFF"}</Badge>
                </div>
            </CardContent>
        </Card>)
}

export default UserInfo