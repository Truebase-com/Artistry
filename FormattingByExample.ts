// This file displays Truebase's formatting style guide used in terms 
// of an actual code file that covers all formatting cases. Many of the
// formatting rules are enforced by the ESLint configuration, and so
// they're not explicitly covered here.

namespace Namespace
{
	/**
	 * All exported members, whether they're embedded in a namespace or not,
	 * should have a JSDoc-style comment ontop of them. This rule stands, even
	 * if the actual comment is empty. This works in tandem with the Artistry
	 * VS Code extension that draws visual separators around classes and methods.
	 * 
	 * Ordering
	 * -------------
	 * The general rule for member ordering is:
	 * 1 - Static members
	 * 2 - Constructor
	 * 3 - Instance members
	 * 
	 * Additionally, members should generally be located close to where they're
	 * being used. Some style guides prefer all the fields to be placed at the top
	 * of a class. However, this style guide explicitly recommends against this.
	 * All related members should be localized together as much as possible to
	 * minimize jumping around a class to work on a single task. This is difficult
	 * to enforce via linting, so we'll likely always be dealing with this in code review.
	 * 
	 * Spacing
	 * -----------
	 * There should never be more than 1 consecutive blank lines in a file.
	 * Exceptions can of course be made in the case when this actually affects
	 * program behavior, such as in some templated (` `) string.
	 * 
	 * There should be 1 blank line between all members, except in some
	 * exceptional cases (described below).
	 */
	export class Exported
	{
		/**
		 * Static members must precede all instance members.
		 */
		static method()
		{ }
		
		/**
		 * If a constructor has property parameters, each of it's parameters
		 * must be on a separate line. This is because it makes it easier to
		 * quickly identify the members.
		 * 
		 * If the constructor has no implementation, it must be written like
		 * below.
		 * 
		 * Also, note how the constructor preceeds all other instance members,
		 * but not the static members. This is intentional.
		 */
		constructor(
			readonly key: string,
			readonly value: string,
			option = false)
		{ }
		
		/**
		 * Strive for all public members being immutable. There are a few
		 * exceptional cases when this isn't possible, but the frequency of
		 * these should be minimized as much as possible.
		 */
		readonly member = 3;
		
		/**
		 * If a property has a backing variable, this backing variable should
		 * be given the same name as the property, but prefixed with an
		 * underscore. Also, it's important that the backing property is placed
		 * immediately after the accessor. This keeps the members of a class
		 * logically grouped together.
		 * 
		 * Get accessors must be placed before it's corresponding set accesssor.
		 * (This should common sense, but it's worth mentioning anyway).
		 */
		get property()
		{
			return this._property;
		}
		set property(value: number)
		{
			this._property = value;
		}
		private _property = 0;
		
		/**
		 * Semi-colons are required after overloaded siguatures.
		 */
		method(s: string): void;
		method(n: number): void;
		method(a: any): void
		{ }
		
		/**
		 * Intersection type operators should have spaces around them.
		 */
		func(value: string | number | boolean)
		{ }
		
		/**
		 * Some functions and methods have a long signature. Sometimes there's no
		 * way around this, especially when the length of the signature is because of
		 * a necessarily long type signature, with complex and/or nested generics.
		 * When this happens, place the parameters on separate lines, and format
		 * the code exactly like the method below.
		 * 
		 * In the case when complexity of the type signature has gotten a bit too
		 * unwieldy, consider breaking it up by specifying an interface or type definition
		 * somewhere beside the class.
		 */
		manyParameters(
			longParameterName1: string,
			longParameterName2: string,
			longParameterName3: string,
			longParameterName4: string,
			longParameterName5: string)
		{ }
		
		/**
		 * This method shows the expectations of how the code inside method and
		 * function bodies should be formatted.
		 */
		codeBodies()
		{
			// Try to use const wherever possible. Using IIFE's is usually a good way
			// to dodge the necessity to use a let. For example, oftentimes a value 
			// should actually be const, but processing is required to initialize it.
			// You can go overboard with these const initializers, especially once
			// there's an async/await somewhere in the initialization.
			const value = (() =>
			{
				const rnd = Math.random() * 10;
				
				if (rnd > 5)
					return -1;
				
				if (rnd > 4)
					return -2;
				
				return Math.round(rnd);
			})();
			
			// With respect to blank line spacing within code bodies, think of blocks
			// of code like paragraphs. Paragraphs are an important literary construct
			// used to separate out smaller ideas into logical groups that collectively
			// form a larger idea such as an essay. Code is very much the same. 
			// 
			// Notice how the lines of code in this method have been spaced out. This
			// manual could write out all the specific rules about when and when not
			// to add a blank line of whitespace, but the entire recommendation could
			// be summed up by simply stating the code should be organized into
			// paragraphs (albeit ones that have a hierarchial structure).
			
			// You can merge the else block with a following statement:
			if (Math.random() > 0.5)
			{
				console.log("");
				console.log("");
				console.log("");
			}
			else switch (Math.round(Math.random() * 3))
			{
				case 0: return 0;
				case 1: return 1;
				case 2: return 2;
			}
		}
		
		/**
		 * There are some cases when a class has a long list of private members
		 * that are all related, and whose names are obvious and don't require
		 * explanation. For these cases, it's OK to group all these together without
		 * blank lines separating them, a without an accompanying JSDoc comment:
		 */
		private positionX1Y1 = 0;
		private positionX1Y2 = 0;
		private positionX2Y1 = 0;
		private positionX2Y2 = 0;
	}
}
