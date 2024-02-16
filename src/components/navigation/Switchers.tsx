import LocaleSwitcher from './LocaleSwitcher'
import { ModeToggle } from './ModeToggle'

export function Switchers() {
  return (
    <div className=' flex flex-row gap-2'>
      <LocaleSwitcher />
      <ModeToggle />
    </div>
  )
}
