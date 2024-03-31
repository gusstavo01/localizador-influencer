export const formatCpf = (value) => {
    // Remove todos os caracteres que não sejam dígitos
     const digits = value.replace(/\D/g, '');
    
    // Limita o CPF a 11 caracteres e aplica a formatação: XXX.XXX.XXX-XX
    const formattedCpf = digits.slice(0, 11).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    return formattedCpf;
};
export const formatTelefone = (value) => {
   
    const digits = value.replace(/\D/g, '');

    
    if (digits.length === 10) {
       
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    } else if (digits.length === 11) {
        
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else {
        
        return value;
    }
};

export const formatCnpj = (value) => {
    const digits = value.replace(/\D/g, '');
    const formattedCnpj = digits.slice(0, 14).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
    return formattedCnpj;

}