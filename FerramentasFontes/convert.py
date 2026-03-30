import codecs
import re
import json

with codecs.open('lei_extracted.txt', 'r', 'utf-8') as f:
    lines = f.readlines()

paragraphs = []
current_par = ""

def is_new_block(line):
    # Marcadores clássicos de lei
    if re.match(r'^(Art\.|§|Parágrafo|TÍTULO|CAPÍTULO|Seção|[IVXLCDM]+\s*-|[a-z]\))', line):
        return True
    
    # Títulos grandes em maiúsculas (ex: PREÂMBULO)
    if line.isupper() and len(line) > 3:
        return True
        
    # Se começar com maiúscula, e for uma linha muito curta, pode ser um subtítulo
    if re.match(r'^[A-Z]', line) and len(line) < 40 and not current_par.endswith(','):
        return True
        
    return False

for line in lines:
    line = line.strip()
    if not line:
        continue
        
    if is_new_block(line) or not current_par:
        if current_par:
            paragraphs.append(current_par)
        current_par = line
    else:
        # Concatena texto de pdf quebrado
        if current_par.endswith('-'):
            current_par = current_par[:-1] + line
        else:
            current_par += " " + line

if current_par:
    paragraphs.append(current_par)

cleaned = [p.strip() for p in paragraphs if len(p.strip()) > 3]

with codecs.open('web_app/LeiOraganicaIracemapolis.js', 'w', 'utf-8') as f:
    f.write("const leiCompleta = " + json.dumps(cleaned, ensure_ascii=False, indent=2) + ";\n")

print("Conversão concluída! Itens gerados:", len(cleaned))
