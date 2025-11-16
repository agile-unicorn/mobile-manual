# Agile Unicorn Manual

Dieses Handbuch enthält alle Regeln und Informationen, die Sie zum Spielen von **Agile Unicorn (1)** benötigen.

## Installation

### Python-Abhängigkeiten installieren

```bash
pip install -r requirements.txt
```

Oder mit einem Virtual Environment:

```bash
python -m venv venv
source venv/bin/activate  # Unter Linux/Mac
# oder: venv\Scripts\activate unter Windows
pip install -r requirements.txt
```

## Lokale Entwicklung

Starten Sie den Entwicklungsserver:

```bash
mkdocs serve
```

Die Website ist dann unter `http://127.0.0.1:8000` erreichbar und aktualisiert sich automatisch bei Änderungen.

## Build erstellen

Erstellen Sie die statische Website:

```bash
mkdocs build
```

Die fertigen Dateien finden Sie im `site/`-Verzeichnis.

## Mehrsprachigkeit

Die Website unterstützt Deutsch und Englisch:

- Englische Seiten: `docs/*.md`
- Deutsche Seiten: `docs/*.de.md`

Der Sprachselektor erscheint automatisch in der Navigation.

## PDF erstellen



## Deployment

### GitHub Pages

```bash
mkdocs gh-deploy
```

### Andere Hosting-Plattformen

Laden Sie einfach den Inhalt des `site/`-Verzeichnisses hoch.

## Verzeichnisstruktur

```
├── mkdocs.yml           # Hauptkonfiguration
├── requirements.txt     # Python-Abhängigkeiten
├── docs/
│   ├── index.md         # Homepage (EN)
│   ├── index.de.md      # Homepage (DE)
│   ├── introduction.md  # Einführung (EN)
│   ├── introduction.de.md
│   ├── setup.md
│   ├── setup.de.md
│   ├── sprints.md
│   ├── sprints.de.md
│   ├── pitching.md
│   ├── pitching.de.md
│   ├── enterprise.md
│   ├── enterprise.de.md
│   ├── credits.md
│   └── lovable-uploads/ # Bilder
└── site/                # Generierte Website (nach Build)
```

## Anpassungen

### Theme und Farben

Bearbeiten Sie `mkdocs.yml` um das Theme anzupassen:

```yaml
theme:
  palette:
    primary: deep purple
    accent: pink
```

### Navigation

Ändern Sie die Navigation in `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - Introduction: introduction.md
  # ...
```

### Inhalte bearbeiten

Bearbeiten Sie die Markdown-Dateien im `docs/`-Verzeichnis.
