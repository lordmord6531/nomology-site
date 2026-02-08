#!/usr/bin/env python3
"""Generate branded OG share preview images for Nomology.

Creates three 1200x630 PNG images for social media link previews:
- og-taste-match.png  (Taste Buds / Taste Match shares)
- og-recipe-share.png (Recipe shares)
- og-flavor-profile.png (Profile shares)

Brand colors:
  Nomology Red:   #BD4527
  Nomology Dark:  #33281C
  Nomology Light: #F5F1F1

Run: python3 scripts/generate-og-images.py
Output: images/og/
"""

import os
from PIL import Image, ImageDraw, ImageFont

# --- Config ---
WIDTH, HEIGHT = 1200, 630
RED = (189, 69, 39)       # #BD4527
DARK = (51, 40, 28)       # #33281C
LIGHT = (245, 241, 241)   # #F5F1F1
WHITE = (255, 255, 255)
CREAM = (245, 240, 232)   # #F5F0E8

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
OUTPUT_DIR = os.path.join(PROJECT_DIR, "images", "og")
ICON_PATH = os.path.join(
    os.path.dirname(PROJECT_DIR),
    "nomology-flutter", "assets", "icon", "app_icon.png"
)

# macOS system fonts (Georgia is close to Judson's serif style)
FONT_HEADING = "/System/Library/Fonts/Supplemental/Georgia Bold.ttf"
FONT_BODY = "/System/Library/Fonts/Helvetica.ttc"

IMAGES = [
    {
        "filename": "og-taste-match.png",
        "heading": "Find Your\nTaste Match",
        "subtext": "See which recipe you'll both love",
        "accent_color": RED,
    },
    {
        "filename": "og-recipe-share.png",
        "heading": "A Recipe\nShared With You",
        "subtext": "Open in Nomology to see the recipe",
        "accent_color": RED,
    },
    {
        "filename": "og-flavor-profile.png",
        "heading": "Discover Their\nFlavor Profile",
        "subtext": "See your own taste profile on Nomology",
        "accent_color": RED,
    },
]


def draw_rounded_rect(draw, xy, radius, fill):
    """Draw a rounded rectangle."""
    x0, y0, x1, y1 = xy
    draw.rectangle([x0 + radius, y0, x1 - radius, y1], fill=fill)
    draw.rectangle([x0, y0 + radius, x1, y1 - radius], fill=fill)
    draw.pieslice([x0, y0, x0 + 2 * radius, y0 + 2 * radius], 180, 270, fill=fill)
    draw.pieslice([x1 - 2 * radius, y0, x1, y0 + 2 * radius], 270, 360, fill=fill)
    draw.pieslice([x0, y1 - 2 * radius, x0 + 2 * radius, y1], 90, 180, fill=fill)
    draw.pieslice([x1 - 2 * radius, y1 - 2 * radius, x1, y1], 0, 90, fill=fill)


def generate_image(config):
    """Generate a single OG image."""
    img = Image.new("RGB", (WIDTH, HEIGHT), LIGHT)
    draw = ImageDraw.Draw(img)

    # Left accent bar
    draw.rectangle([0, 0, 8, HEIGHT], fill=RED)

    # Load fonts
    font_heading = ImageFont.truetype(FONT_HEADING, 72)
    font_sub = ImageFont.truetype(FONT_BODY, 28)
    font_url = ImageFont.truetype(FONT_BODY, 22)

    # Load and place logo icon (top-left area)
    if os.path.exists(ICON_PATH):
        icon = Image.open(ICON_PATH).convert("RGBA")
        icon_size = 80
        icon = icon.resize((icon_size, icon_size), Image.LANCZOS)
        # Place icon with padding from left accent bar
        icon_x, icon_y = 60, 50
        img.paste(icon, (icon_x, icon_y), icon)

        # "Nomology" text next to icon
        font_brand = ImageFont.truetype(FONT_HEADING, 32)
        draw.text((icon_x + icon_size + 16, icon_y + 24), "Nomology", fill=DARK, font=font_brand)

    # Main heading text — centered vertically, left-aligned
    text_x = 60
    heading_y = 170
    draw.multiline_text(
        (text_x, heading_y),
        config["heading"],
        fill=DARK,
        font=font_heading,
        spacing=12,
    )

    # Calculate heading height for subtext placement
    heading_bbox = draw.multiline_textbbox((text_x, heading_y), config["heading"], font=font_heading, spacing=12)
    subtext_y = heading_bbox[3] + 30

    # Subtext
    draw.text((text_x, subtext_y), config["subtext"], fill=(107, 91, 79), font=font_sub)

    # Bottom bar with URL
    bar_y = HEIGHT - 60
    draw.rectangle([0, bar_y, WIDTH, HEIGHT], fill=RED)
    draw.text((60, bar_y + 16), "nomology.food", fill=WHITE, font=font_url)

    # Right side: decorative circles (subtle brand element)
    for i, (cx, cy, r, alpha) in enumerate([
        (950, 200, 180, 25),
        (1050, 400, 120, 18),
        (850, 450, 80, 12),
    ]):
        overlay = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
        overlay_draw = ImageDraw.Draw(overlay)
        overlay_draw.ellipse(
            [cx - r, cy - r, cx + r, cy + r],
            fill=(*RED, alpha),
        )
        img = Image.alpha_composite(img.convert("RGBA"), overlay).convert("RGB")

    # Save
    output_path = os.path.join(OUTPUT_DIR, config["filename"])
    img.save(output_path, "PNG", optimize=True)
    file_size = os.path.getsize(output_path)
    print(f"  {config['filename']} ({file_size // 1024}KB)")


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("Generating OG images...")
    for config in IMAGES:
        generate_image(config)
    print("Done!")


if __name__ == "__main__":
    main()
