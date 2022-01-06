import React from 'react'

export interface SidebarLinkProps {
  to: string
  icon: React.ReactNode
  children: React.ReactNode
  mini: boolean
  className?: string
}
