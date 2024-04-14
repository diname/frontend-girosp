import Logo from '../../assets/logo.jpg'

import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { Button } from '@/components/ui/button'

export const UserLogin = () => {
  return (
    <div className="bg-orange-400 min-w-full min-h-full flex flex-col justify-center items-center">
      <div className=" min-w-96">
        <img src={Logo} alt="Logo da empresa GiroSP" />
        <h1 className="text-3xl mb-4">Login</h1>
        <form action="" className="flex flex-col">
          <Label className="py-2 ">Email: </Label>
          <Input className="py-2 mb-4" placeholder="Digite seu email" />
          <Label className="py-2">Senha: </Label>
          <Input className="py-2" placeholder="Digite sua senha" />
          <Button className="mt-5">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
