import os
import pypdf

pdf_path = "Lei Orgânica de Iracemápolis.pdf"
out_path = "lei_extracted.txt"

try:
    with open(pdf_path, 'rb') as f:
        reader = pypdf.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        
    with open(out_path, 'w', encoding='utf-8') as out:
        out.write(text)
    print("Extraction successful.")
except Exception as e:
    print(f"Error: {e}")
