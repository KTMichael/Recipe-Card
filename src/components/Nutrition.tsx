export const Nutrition = () => {
    return (
        <div className="Nutrition-Section">
            <span className="Section-Title">Nutrition</span>
            <p>
                The table below shows nutritional values per serving without the additional fillings.
            </p>
            <table className="Nutrition-Table">
            <tr>
                <td>Calories</td>
                <td className="Nutrient-Amount">277kcal</td>
            </tr>
            <tr>
                <td>Carbs</td>
                <td className="Nutrient-Amount">0g</td>
            </tr>
            <tr>
                <td>Protein</td>
                <td className="Nutrient-Amount">20g</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td className="Nutrient-Amount">22g</td>
            </tr>
            </table>
        </div>
    );
}