import pypdf

pdf_path = "Edital_de_Abertura_Processo_Seletivo_001_2026_Iracemapolis_2026_03_17_15_56_34.pdf"
out_path = "edital_extracted.txt"

try:
    with open(pdf_path, 'rb') as f:
        reader = pypdf.PdfReader(f)
        text = ""
        for page in reader.pages:
            t = page.extract_text()
            if t: text += t + "\n"
        
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(text)
    print("Extração do edital concluída.")
except Exception as e:
    print(f"Erro: {e}")
