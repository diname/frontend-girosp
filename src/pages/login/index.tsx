import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'

export const UserLogin = () => {
  return (
    <form action="" className="flex flex-col">
      <Label className="py-2">Email: </Label>
      <Input className="py-2" placeholder="Digite seu email" />
      <Label className="py-2">Senha: </Label>
      <Input className="py-2" placeholder="Digite sua senha" />
    </form>
  )
}
