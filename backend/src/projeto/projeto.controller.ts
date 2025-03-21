import { Controller, Get, Param } from "@nestjs/common"
import { ProjetoPrisma } from "./projeto.prisma"
import { Id, Projeto } from "@core"

@Controller("projetos")
export class ProjetoController {
	constructor(private readonly repo: ProjetoPrisma) {}

	@Get()
	async obterTodas(): Promise<Projeto[]> {
		return this.repo.obterTodas()
	}

	@Get(":id")
	async obterPorId(@Param("id") id: string): Promise<Projeto | null> {
		return this.repo.obterPorId(Number(id))
	}
}
