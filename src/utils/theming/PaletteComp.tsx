import { PALETTE_ENUMS } from './palette.interface';
import { palette } from './palette';

export const PaletteComp: any = (props: any) => (
    <div className="stories-colors-block">
        {Object.values(PALETTE_ENUMS).map((key: any) =>
            typeof key !== 'number' ? (
                <div className="stories-icon-text">
                    <div
                        className="stories-colors-item"
                        key={key}
                        style={{ background: palette[key] }}
                    >
                        <small className="stories-colors-text">{key}</small>
                        <small className="stories-colors-text">
                            {palette[key]}
                        </small>
                        <div {...props} icon={key} />
                    </div>
                </div>
            ) : (
                ''
            )
        )}
    </div>
);