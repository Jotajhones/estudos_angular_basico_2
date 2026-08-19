import { Injectable, signal } from "@angular/core";
import { modalData } from "./modal-data";

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    dadosModal = signal<modalData | null>(null);
    isOpen = signal<boolean>(false);

    exibir(config: modalData) {
        this.dadosModal.set(config);
        this.isOpen.set(true);
    }

    fechar() {
        this.isOpen.set(false);
        this.dadosModal.set(null);
    }

    exibirErro(err: any, tituloPersonalizado?: string, mensagemPersonalizada?: string) {
        this.exibir({
            titulo: err.error?.type || tituloPersonalizado || "Erro",
            mensagem: err.error?.message || mensagemPersonalizada || "Ocorreu um erro inesperado."
        });
        console.error(err);
    }
}