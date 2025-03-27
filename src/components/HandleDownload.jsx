const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../../public/TheCurriculo.pdf'; 
    link.download = 'Curriculo_Joao_Eduardo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

export default handleDownload