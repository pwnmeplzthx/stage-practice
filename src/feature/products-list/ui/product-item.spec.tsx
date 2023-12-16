import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ProductItem } from "./product-item"

describe('product item', () => {
    it('should call delete callback', async () => {
        const onDelete = jest.fn()
        render(
            <ProductItem 
                product={{
                    id: 'qwe',
                    name: 'test name',
                    description: 'test desc',
                }}
                onDelete={onDelete}
            />)

        const button = screen.getByText('Удалить')
        await userEvent.click(button);

        expect(onDelete).toHaveBeenCalled();
    })
})