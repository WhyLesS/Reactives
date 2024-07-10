import { useReducer } from 'react';
import { Counter } from './counter/Counter';

const INITIAL_FORM = {
    user: '',
    text: '',
    rating: 0,
};

const min = 0;
const max = 5;

function reducer(state, { type, payload }) {
    switch (type) {
        case 'setUser':
            return { ...state, user: payload };
        case 'setText':
            return { ...state, text: payload };
        case 'incrementRating':
            return { ...state, rating: Math.min(state.rating + 1, max) };
        case 'decrementRating':
            return { ...state, rating: Math.max(state.rating - 1, min) };
        case 'clear':
            return INITIAL_FORM;
        case 'save':
            // Как затычка, получается, типа что-то делаем здесь.
            return INITIAL_FORM;
        default:
            return state;
    }
}

const useForm = (initialValue) => {
    return useReducer(reducer, initialValue);
};

export const ReviewForm = () => {
    const [form, dispatch] = useForm(INITIAL_FORM);
    const { user, text, rating } = form;

    return (
        <div>
            <div>
                <span>User</span>
                <input
                    value={user}
                    onChange={(event) => {
                        dispatch({
                            type: 'setUser',
                            payload: event.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <span>Text</span>
                <input
                    value={text}
                    onChange={(event) => {
                        dispatch({
                            type: 'setText',
                            payload: event.target.value,
                        });
                    }}
                />
            </div>
            <div>
                <span>Rating {rating}</span>
                <Counter
                    count={rating}
                    increment={() => dispatch({ type: 'incrementRating' })}
                    decrement={() => dispatch({ type: 'decrementRating' })}
                />
            </div>
            <button onClick={() => dispatch({ type: 'save' })}>Save</button>
            <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
        </div>
    );
};
