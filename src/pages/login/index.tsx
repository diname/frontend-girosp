import Logo from '../../assets/logo.jpg'

import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '@/components/ui/button'

export function UserLogin() {
  return (
    <div className="bg-orange-400 flex flex-col justify-center items-center">
      <div className="p-5 flex flex-col max-w-96">
        <img src={Logo} alt="Logo da empresa GiroSP" className="" />
        <form action="" className="flex flex-col md:w-96">
          <Label className="py-2 w-full text-slate-50 ">Email: </Label>
          <Input className="py-2 mb-4 w-full" placeholder="Digite seu email" />
          <Label className="py-2 w-full text-slate-50">Senha: </Label>
          <Input placeholder="Digite sua senha" className="py-2 w-ful" />
          <Button className="mt-5 w-full">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
